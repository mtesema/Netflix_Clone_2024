import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "netflix-clone-2024-bf37e.firebaseapp.com",
  projectId: "netflix-clone-2024-bf37e",
  storageBucket: "netflix-clone-2024-bf37e.appspot.com",
  messagingSenderId: "1081234096543",
  appId: "1:1081234096543:web:5d229cabf3d4a8cdd73daa",
  measurementId: "G-TL1VD58TPB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// ` To use fire base data base

const db = firebaseApp.firestore();

// ` To use fire base authentication service

const auth = firebase.auth();

export { auth };
export default db;
