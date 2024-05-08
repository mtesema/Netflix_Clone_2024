import React from "react";
import { useState, useEffect } from "react";
import List from "./List/List";
import "./Style/Nav.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { useNavigate } from "react-router-dom";

function Nav() {
  const [hasScrolled, setHasScrolled] = useState(true);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 30) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  const hoverOver = () => {
    setIsHovered(true);
  };

  const hoverAway = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Navigate = useNavigate();
  const HomePageClickHandle = () => {
    Navigate("/");
  };

  const profilePageClickHandle = () => {
    Navigate("/profile");
  };

  return (
    <div
      className={`d-flex justify-content-between  ${
        hasScrolled ? "scrolled" : ""
      } nav_main`}
    >
      <div className="right-nav">
        <div className="nav_logo">
          <img
            onClick={HomePageClickHandle}
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
        </div>
        <div className="list_component">
          <List />
        </div>
      </div>

      <div className="left-nav">
        <div className="nav_icons">
          <SearchIcon />
          <NotificationsNoneIcon />
          <div className="Kids_account">Kids</div>
        </div>
        <div className="accounts">
          <div className="nav_accounts">
            <img
              onClick={profilePageClickHandle}
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
                {/* Render the dropdown list of accounts */}
                {/* <ul>
                  {accounts.map((account) => (
                    <li key={account}>{account}</li>
                  ))}
                </ul> */}
              </div>
            ) : (
              <ArrowDropDownIcon />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
