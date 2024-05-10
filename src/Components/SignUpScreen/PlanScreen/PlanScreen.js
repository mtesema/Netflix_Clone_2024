import React, { useEffect } from "react";
import "./Style/Plan.css";
import { useState } from "react";
import "firebase/firestore";
import { useSelector } from "react-redux";
import { db, auth } from "../../../firebase/firebase";

import {
  collection,
  getDocs,
  doc,
  addDoc,
  getDoc,
  setDoc
} from "firebase/firestore/lite";
import { onSnapshot, query } from "firebase/firestore"; // Import onSnapshot from Firestore

import { selectUser } from "../../../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";

function PlanScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const user = useSelector(selectUser);
  if (user) {
    console.log("Current user uid: ", user.uid);
    console.log("user email:", user.email);
  }

  // Use the useEffect hook to perform side effects in function components
  // This hook is used to fetch products from the database when the component mounts
  useEffect(() => {
    // Define an asynchronous function to fetch products from the Firestore database
    const fetchProducts = async () => {
      try {
        // Fetch documents from the 'products' collection in Firestore
        const querySnapshot = await getDocs(collection(db, "products"));

        const productsData = []; // Initialize an empty array to store fetched product data

        // Map each document to an array of promises that fetch prices
        const productsPromises = querySnapshot.docs.map(async (doc) => {
          const product = doc.data(); // Extract the data of the current document
          product.id = doc.id; // Add the unique identifier (ID) of the document to the 'product' object

          // Fetch the 'prices' subcollection for the current product document
          const priceSnap = await getDocs(collection(doc.ref, "prices"));
          const pricesData = []; // Initialize an array to store price data

          // Iterate over each document in the 'prices' subcollection
          priceSnap.forEach((priceDoc) => {
            pricesData.push({
              id: priceDoc.id, // Add the unique identifier (ID) of the price document
              data: priceDoc.data(), // Add the price data
            });
          });

          product.prices = pricesData; // Add the 'pricesData' array to the 'product' object
          return product; // Return the updated product object
        });

        // Wait for all promises to resolve and collect the results into an array
        const productsArray = await Promise.all(productsPromises);

        setProducts(productsArray); // Set the state variable 'products' with the fetched product data
        setLoading(false); // Set the loading state to false after setting products
      } catch (error) {
        console.error("Error fetching products:", error); // Log any errors that occur during fetching
      }
    };

    // Call the 'fetchProducts' function when the component mounts by passing an empty dependency array
    // This ensures that the function is executed only once after the initial render
    fetchProducts();
  }, []);

  // Define an async function to load Stripe Checkout

  console.log("Products:", products); // Check if products state is populated correctly

const loadCheckout = async (priceId) => {
  try {
    // Add a new document to the checkout sessions collection
    const docRef = await addDoc(
      collection(db, `customers/${user.uid}/checkout_sessions`),
      {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
        lineItems: [{ price: priceId, quantity: 1 }],
      }
    );

    // Get the snapshot of the newly added document
    const docSnap = await getDoc(docRef);

    console.log("checkout session id:", docRef.id);

    // Get the data from the snapshot
    const { error, sessionId } = docSnap.data();

    if (error) {
      alert(`An error occurred: ${error.message}`);
    }

    if (sessionId) {
      const stripe = await loadStripe(
        "pk_test_51PCCUUAnM22dHA1ljbzwLOeXU1p5i87mpL0SGQ0BT58yE3qimVO4bTNtsmFmXCn99Ju9rC58COHjwh2RYFUpSBM000t5zVPq7O"
      );
      stripe.redirectToCheckout({ sessionId });
    } else {
      console.error("No checkout session ID returned");
    }
  } catch (error) {
    console.error("Error loading checkout:", error);
  }
};
  return (
    <>
      <div className="plan_list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <div className="plan_wrapper">
                  <span>{product.name}</span>
                  <p className="plan_feature">{product.description}</p>
                </div>
                <div>
                  {product.prices.map((price) => (
                    <button
                      key={price.id}
                      onClick={() => {
                        console.log("Current Price ID:", price.id);
                        // Call the 'loadCheckout' function with the price ID
                        loadCheckout(price.id);
                      }}
                      className="subscribe"
                    >
                      Subscribe
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
export default PlanScreen;
