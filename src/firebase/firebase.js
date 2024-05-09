

//Using Firestore Lite SDK instead of SDK fir simplity purposes


import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

//if you want to impor the firebase auth library directly from firebase
// import {
//  auth
// } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcmhzZPR5N8p_ihy2DinrOKeTI2lKOo_M",
  authDomain: "netflix-clone-2024-bf37e.firebaseapp.com",
  projectId: "netflix-clone-2024-bf37e",
  storageBucket: "netflix-clone-2024-bf37e.appspot.com",
  messagingSenderId: "1081234096543",
  appId: "1:1081234096543:web:5d229cabf3d4a8cdd73daa",
  measurementId: "G-TL1VD58TPB",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
console.log("my database:", db)

// Get authentication instance
const auth = getAuth(firebaseApp);
console.log("Auth instance:", auth);


export { db };
export { auth };
