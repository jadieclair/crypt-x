import React from "react";
import "./header.css";
import SearchBar from "../SearchBar/SearchBar";
import BellIcon from "../Icons/BellIcon";
import QuestionIcon from "../Icons/QuestionIcon";
import img from "../../assets/img.jpg";
import DownArrowIcon from "../Icons/DownArrowIcon";

/**
 * Header component represents the top section of the application, containing search bar, user information, and icons.
 *
 * @returns {ReactElement} Header component with search bar, user information, and icons.
 */
const Header = () => {
  return (
    <div className="header-container">
      {/* Search bar component */}
      <SearchBar />
      <div className="banner">
        {/* Icons for notifications and help */}
        <span className="banner-icons">
          <BellIcon /> {/* Bell icon for notifications */}
          <QuestionIcon /> {/* Question mark icon for help */}
        </span>
        {/* User information section */}
        <span className="user-info">
          {/* User profile image */}
          <img src={img} className="user-img" alt="User profile" />

          {/* User details including name, username, and down arrow icon */}
          <p className="details">
            <strong>Laurice</strong> {/* User's full name */}
            <span className="user-contact">@laurice22</span>{" "}
            {/* User's username */}
          </p>
          <span className="down-arrow">
            <DownArrowIcon /> {/* Down arrow icon for dropdown menu */}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Header;
