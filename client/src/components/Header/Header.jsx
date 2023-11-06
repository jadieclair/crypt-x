import React from "react";
import "./header.css";
import SearchBar from "../SearchBar/SearchBar";
import BellIcon from "../Icons/BellIcon";
import QuestionIcon from "../Icons/QuestionIcon";
import img from "../../assets/img.jpg";
import DownArrowIcon from "../Icons/DownArrowIcon";

const Header = () => {
  return (
    <div className="header-container">
      <SearchBar />
      <div className="banner">
        <span className="banner-icons">
          <BellIcon />
          <QuestionIcon />
        </span>
        <span className="user-info">
          <img src={img} className="user-img" alt="User profile" />

          <p className="details">
            <strong>Jack Reacher</strong>
            <span className="user-contact">@jack123</span>
          </p>
          <span className="down-arrow">
            <DownArrowIcon />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Header;
