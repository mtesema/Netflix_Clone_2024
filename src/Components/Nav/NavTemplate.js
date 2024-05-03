import React from "react";
import { useState, useEffect } from "react";
import List from "./List/List";
import "./Style/Nav.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { useNavigate } from "react-router-dom";

function NavTemplate() {
  const [isHovered, setIsHovered] = useState(false);

  const hoverOver = () => {
    setIsHovered(true);
  };

  const hoverAway = () => {
    setIsHovered(false);
  };

  const Navigate = useNavigate();
  const profileHandleClick = () => {
    Navigate("/profile");
  };

  return (
    <>
      <div className ="d-flex justify-content-between">
      <div className="right-nav">
        <div className="nav_main">
          <div className="nav_logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix Logo"
            />
          </div>
        </div>
      </div>

      <div className="left-nav">
        <div className="accounts">
          <div className="nav_accounts">
            <img
              onClick={profileHandleClick}
              src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
              alt="User Avatar"
            />
          </div>
          <div
            className="nav_accounts_name"
            onMouseEnter={hoverOver}
            onMouseLeave={hoverAway}
          >
            {/* Render the icon based on hover state */}
            {isHovered ? (
              <div>
                <ArrowDropUpIcon />
              </div>
            ) : (
              <ArrowDropDownIcon />
            )}
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default NavTemplate;
