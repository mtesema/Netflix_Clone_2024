import React from "react";
import "./Style/SignUpScreen.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SignInScreen from "./SignInScreen/SignInScreen";
import { useNavigate } from "react-router-dom";

function SignUpScreen() {
  const [signUp, setSignUp] = React.useState(false);
  
//
  const SignUpHandler = () => {
    setSignUp(true);
  };

  const Navigate = useNavigate();
  const HomepageHandler = () => {
    Navigate("/");
  }


  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          onClick={HomepageHandler}
          id="homeButton"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </div>

      <div className="signin_button">
        <button onClick={SignUpHandler}>Sign In</button>
      </div>

      <div className="loginScreen_gradient"></div>

      {signUp ? (
        <SignInScreen />
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="loginScreen_body d-flex flex-column">
              <div className="loginScreen_description">
                <h1>Unlimited movies, TV shows, and more.</h1>
              </div>
              <div className="loginScreen_subtext">
                <h2>Unlimited movies, TV shows, and more.</h2>
              </div>
              <div className="loginScreen_inputContainer">
                <div className="loginScreen_description">
                  <p>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </p>
                </div>

                <div className="loginScreen_input">
                  <form>
                    <div>
                      <label htmlFor="email">Email Address</label>
                    </div>

                    <button
                      onClick={SignUpHandler}
                      className="loginScreen_button d-flex align-items-center"
                    >
                      Get Started
                      <ArrowForwardIosIcon />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUpScreen;
