import React from "react";
import "./Style/SigninStyle.css";
import { useRef } from "react";
import { auth } from "../../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function SignInScreen() {
  //monitoring the state of the form signin info email and password
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  // to navigate to different pages
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      const authUser = userCredential.user;
      console.log("User signed up:", authUser);
      // Optionally, you can return or perform additional actions after successful sign-up
       navigate("/profile");
      return authUser;
    } catch (error) {
      console.error("Error creating user:", error);
      // Handle sign-up errors
      alert("Error signing up. Please try again.");
    }
  };

  const signIn = async (e) => {
    e.preventDefault();

    // Perform sign-in logic here
    try {
      const signingInfo = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      const authUser = signingInfo.user;
      console.log("User signed in:", authUser);
      // Optionally, you can return or perform additional actions after successful sign-in
         navigate("/");
      return authUser;
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="SignInScreen__container">
      <div className="SignInScreen d-flex">
        <header>Sign In</header>
        <form>
          {/* Email Input Field */}
          <div className="input-container">
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              className="input-field"
              placeholder=" "
              onFocus={(e) => e.target.parentNode.classList.add("focused")}
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.parentNode.classList.remove("focused");
                }
              }}
            />
            <label htmlFor="email" className="input-label">
              Email or mobile number
            </label>
          </div>

          {/* Password Input Field */}
          <div className="input-container">
            <input
              ref={passwordRef}
              type="password" // Change input type to "password"
              id="password" // Assign a unique ID
              name="password"
              className="input-field"
              placeholder=" "
              onFocus={(e) => e.target.parentNode.classList.add("focused")}
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.parentNode.classList.remove("focused");
                }
              }}
            />
            <label htmlFor="password" className="input-label">
              Password
            </label>
          </div>

          {/* Sign In Button */}
          <div>
            <button onClick={signIn} className="signIn-button">
              Sign In
            </button>
          </div>

          {/* OR Divider */}
          <div className="signin_fillers"> OR </div>

          {/* Sign In with Code Button */}
          <div>
            <button className="signIn-with-code-button">
              Use a Sign-in Code
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="signin_fillers">
            <a href="https://www.netflix.com/LoginHelp"> Forgot Password?</a>
          </div>

          {/* Remember Me Toggle */}
          <div className="toggle-switch">
            <input className="checkbox" type="checkbox" />
            <span className="label-text">Remember me</span>
          </div>

          {/* Sign Up Link */}
          <p className="signin_fillers">
            New to Netflix?
            <span className="signup_link" onClick={signUp}>
              Sign up now.
            </span>
          </p>

          {/* Footer */}
          <p className="signin_footer">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.{" "}

            <a href="https://www.netflix.com/login">Learn more.</a>

            <a href="https://policies.google.com/terms">Learn more.</a>

          </p>
        </form>
      </div>
    </div>
  );
}

export default SignInScreen;