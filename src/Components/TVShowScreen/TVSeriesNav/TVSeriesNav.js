import React from "react";
import { useState, useEffect } from "react";
import List from "./List/List";
import "./Style/TVSeriesNav.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useNavigate } from "react-router-dom";
import TVSeriesData from "../Data";


function TVSeriesNav() {
  //-----------------------------------------------
  // State variable to track whether the user has scrolled or not
  const [hasScrolled, setHasScrolled] = useState(true);
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //-----------------------------------------------

  // Access the genres array from TVSeriesData
  const genres = TVSeriesData.genres;
  // console.log(genres);
  // Extract the genre IDs from the genres array
  // const genreIds = TVSeriesData.genres.map((genre) => genre.id);
  // console.log("List of genre IDs:", genreIds);
  // State variable to track whether the dropdown is open or not
  const [isOpen, setIsOpen] = useState(false);
  // State variable to track the selected genre
  const [selectedGenre, setSelectedGenre] = useState([]);

  //-----------------------------------------------
  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle genre selection
  const handleGenreSelection = (x) => {
    setSelectedGenre(x);
    setIsOpen(false);
  };

  // Log selectedGenre whenever it changes
  useEffect(() => {

    // console.log("Selected genre:", selectedGenre);
  }, [selectedGenre]);

  //-----------------------------------------------
  // State variable to track whether a button is hovered or not
  const [isHovered, setIsHovered] = useState(false);

  const hoverOver = () => {
    setIsHovered(true);
  };

  const hoverAway = () => {
    setIsHovered(false);
  };

  //-----------------------------------------------
  // React hooks to navigate to different pages
  const Navigate = useNavigate();
  const HomePageClickHandle = () => {
    Navigate("/");
  };

  // React hooks to navigate to different pages
  const profilePageClickHandle = () => {
    Navigate("/profile");
  };

  return (
    <>
      {/* Navbar for series page */}
      <div className="d-flex justify-content-between nav_main_series">
        <div className="right-nav-series">
          <div className="nav_logo_series">
            <img
              onClick={HomePageClickHandle}
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix Logo"
            />
          </div>
          <div className="list_component_series">
            <List />
          </div>
        </div>

        <div className="left-nav-series">
          <div className="nav_icons_series">
            <SearchIcon />
            <NotificationsNoneIcon />
            <div className="Kids_account-series">Kids</div>
          </div>
          <div className="accounts-series">
            <div className="nav_accounts_series">
              <img
                onClick={profilePageClickHandle}
                src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
                alt="User Avatar"
              />
            </div>
            <div
              className="nav_accounts_name_series"
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

      {/* Genre Filter Section */}
      <div
        className={`genre_filter d-flex ${hasScrolled ? "nav_scrolled" : ""}`}
      >
        <div className="nav_filter_title">
          <h2>TV Shows </h2>
        </div>
        <div className="nav_button ">
          <button
            onMouseEnter={hoverOver}
            onMouseLeave={hoverAway}
            className={isHovered ? "button_light" : "button_dark"}
            onClick={toggleDropdown}
          >
            Genres
            <ArrowDropDownIcon />
          </button>
          {/* Render the genre list based on hover state */}
          {isOpen && (
            <ul className="genre_list">
              {genres.map((genre) => (
                <li
                  onClick={() => handleGenreSelection(genre.id)}
                  key={genre.id}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default TVSeriesNav;
