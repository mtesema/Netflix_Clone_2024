import React, { useEffect, useState } from "react";
import "./Style/Plan.css";
import "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";

import db from "../../../firebase/firebase";
import { selectUser } from "../../../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";

function PlanScreen() {
  const STRIPE_APP_KEY = process.env.REACT_APP_STRIPE_APP_KEY;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  if (user) {
    console.log("Current user uid: ", user.uid);
    console.log("user email:", user.email);
  }

  useEffect(() => {
    if (user && user.uid) {
      db.collection("customers")
        .doc(user.uid) // Here, accessing user.uid instead of user.id
        .collection("subscriptions")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(async (subscription) => {
            setSubscription({
              role: subscription.data().role,
              current_period_end:
                subscription.data().current_period_end.seconds,
              current_period_start:
                subscription.data().current_period_start.seconds,
            });
          });
        });
    }
  }, [user, dispatch]);

  console.log("subscription", subscription);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });

        setProducts(products);
        setLoading(false);
      });
  }, []);

  console.log("Products:", products); // Check if products state is populated correctly

  //Load the checkout info from Stripe and firebase
  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    const docSnap = await docRef;

    //check the load info
    console.log(docSnap);
    console.log("checkout session id:", docRef.id);

    //if succesful redirect to stripe for a payment
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        // Show an error to your customer and inspect your Cloud Functions logs in the Firebase console
        console.log(`An error occured: ${error.message}`);
      }
      if (sessionId) {
        // We have a session, let's redirect to Checkout
        // Init Stripe
        // copy and past your api key here 
        const stripe = await loadStripe(`${STRIPE_APP_KEY}`);
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <>
      <div className="plan_list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {subscription ? (
              <div className="current_plan">
                <p>
                  Plan <span>Current Plan: {subscription.role}</span>
                </p>
              </div>
            ) : null}
            {subscription ? (
              <div className="Renewal_info">
                <span>
                  Renewal date:{" "}
                  {new Date(
                    subscription.current_period_end * 1000
                  ).toLocaleDateString()}
                </span>
              </div>
            ) : null}
            {/* Render the list of products */}
            {Object.entries(products).map(([productId, productData]) => {
              // Add logic to check if the user's subscription is active
              const isCurrentPackage =
                productData.name &&
                subscription &&
                typeof subscription.role === "string" &&
                productData.name
                  .toLowerCase()
                  .includes(subscription.role.toLowerCase());

              return (
                <li key={productId}>
                  <div className="plan_wrapper">
                    <span>{productData.name}</span>
                    <p className="plan_feature">{productData.description}</p>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        !isCurrentPackage &&
                        loadCheckout(productData.prices.priceId)
                      }
                      className={`${
                        isCurrentPackage && "current_subscription"
                      } subscribe`}
                      disabled={isCurrentPackage}
                      // Disable button if subscription is not active
                    >
                      {isCurrentPackage ? "Current Package" : "Subscribe"}
                    </button>
                  </div>
                </li>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
export default PlanScreen;
