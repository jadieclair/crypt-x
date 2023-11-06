import React from "react";
import "./searchBar.css";
import MagnifyIcon from "../Icons/MagnifyIcon";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search type of keywords"
      />
      <span className="magnify-icon">
        <MagnifyIcon />
      </span>
    </div>
  );
};

export default SearchBar;
