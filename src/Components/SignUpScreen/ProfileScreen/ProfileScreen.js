import React from "react";
import "./Style/Profile.css";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "../../../features/userSlice";
import { auth } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function ProfileScreen() {
  const user = useSelector(selectUser);
  // console.log("user", user);
  const navigate = useNavigate(); // Initialize navigate

  const HomePageHandler = () => {
    navigate("/");
  };

  // Logout handler function
  const logoutHandler = async () => {
    try {
      await auth.signOut();
      console.log("User logged out successfully.");
      navigate("/"); // Redirect to "/signup" upon successful logout
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <div className="nav_porfile_logo">
        <img
          onClick={HomePageHandler}
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="profile_main_container">
            <div className="profile_header">
              <p className="text-white profile_title">Edit Profile</p>
            </div>

            <div className="d-flex align-items-stretch profile_container">
              <div className="user_avator">
                <img
                  src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                  alt="User Avator"
                />
              </div>
              <div className="profile_info">
                {/* Your original code */}
                <div className="profile_email">
                  <p>{user ? user.email : ""}</p>
                  {/*Check if user exists before accessing email */}
                </div>
                <div className="current_plan">
                  <p>
                    Plan <span>(Current Plan: Standard)</span>
                  </p>
                </div>
                <div className="Renewal_info">
                  <p>Renewal date: 01/01/01</p>
                </div>
                <div className=" plan_list">
                  <ul>
                    <li>
                      <div className="plan_wrapper">
                        <span>Netflix Standard</span>
                        <p className="plan_feature"> 1080p</p>
                      </div>
                      <div>
                        <button className="subscribe">Subscribe</button>
                      </div>
                    </li>
                    <li>
                      <div className="plan_wrapper">
                        <span>Netflix Baisc </span>
                        <p className="plan_feature"> 480p</p>
                      </div>
                      <div>
                        <button className="subscribe">Subscribe</button>
                      </div>
                    </li>
                    <li>
                      <div className="plan_wrapper">
                        <span>Premium</span>
                        <p className="plan_feature"> 4k+HDR </p>
                      </div>
                      <div>
                        <button className="subscribe">Subscribe</button>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Logout button */}
                <div className="signout_button">
                  <button onClick={logoutHandler} className="signout">
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileScreen;
