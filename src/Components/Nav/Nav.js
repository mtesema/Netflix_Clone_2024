import React from "react";
import { useState, useEffect } from "react";
import List from "./List/List";
import "./Style/Nav.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";



function Nav() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 20) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`d-flex justify-content-between pt-3 ${
        hasScrolled ? "scrolled" : ""
      } nav_main`}
    >
      <div className="right-nav">
        <div className="nav_logo">
          <img
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
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="User Avatar"
            />
          </div>
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
}

export default Nav;
