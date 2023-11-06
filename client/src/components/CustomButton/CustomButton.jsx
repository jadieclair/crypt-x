import React from "react";
import "./customButton.css";

const CustomButton = ({ svgIcon, name }) => {
  return (
    <div className="nav-tab">
      <li className="ul-list">
        {svgIcon}
        <span className="list-name">{name}</span>
      </li>
    </div>
  );
};

export default CustomButton;
