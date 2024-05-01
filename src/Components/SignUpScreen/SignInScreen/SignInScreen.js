import React from "react";
import "./Style/SigninStyle.css";
import { useRef } from "react";
import { db } from "../../../firebase/firebase"


function SignInScreen() {
  const emailRef = useRef();
  const passwordRef = useRef();
  console.log(db)

  const register = (e) => {
    e.preventDefault();
  

  }

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="SignInScreen__container">
      <div className=" SignInScreen d-flex">
        <header>Sign In</header>
        <form>
          <div>
            <label htmlFor="email">Email or mobile number</label>
          </div>
          <div>
            <label htmlFor="password">Password</label>
          </div>

          <div>
            <button className="signIn-button" onClick={signIn}>
              Sign In
            </button>
          </div>

          <div className="signin_fillers"> OR </div>

          <div>
            <button onClick={signIn} className="signIn-with-code-button">
              Use a Sign-in Code
            </button>
          </div>

          <div className="signin_fillers">
            <a href=""> Forgot Password?</a>
          </div>

          <div class="toggle-switch">
            <input type="checkbox" />
            <span class="label-text">Remember me</span>
          </div>

          <p className="signin_fillers">
            New to Netflix?{" "}
            <span className="signup_link" onClick={register}>
              Sign up now.
            </span>
          </p>
          <p className="signin_footer">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more. <a href="">Learn more.</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignInScreen;
