import React from "react";
import { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import SignUpScreen from "./Components/SignUpScreen/SignUpScreen";
import ProfileScreen from "./Components/SignUpScreen/ProfileScreen/ProfileScreen";
import TVShowScreen from "./Components/TVShowScreen/TVShowScreen";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
 
} from "react-router-dom"; // Import BrowserRouter
import { db, auth } from "../src/firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useNavigate } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  // Effect to listen to authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Logged in
        console.log("Logged in", user);
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
        console.log("Logged out");
      }
    });
    return () => unsubscribe(); // Unsubscribe from auth state changes on component unmount
  }, [dispatch]);

  return (
    <>
      {/* Wrap your App component with Router */}
      <Router>
        <Routes>
          {/* Route configurations */}
          <Route path="/" element={user ? <HomeScreen /> : <SignUpScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/tvshows" element={<TVShowScreen />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
