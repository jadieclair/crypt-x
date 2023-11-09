import React from "react";
import "./customButton.css";

/**
 * CustomButton component displays a button with an SVG icon and a name.
 *
 * @param {Object} props - Component properties.
 * @param {ReactElement} props.svgIcon - SVG icon to be displayed in the button.
 * @param {string} props.name - Name to be displayed next to the SVG icon.
 * @returns {ReactElement} CustomButton component with icon and name.
 */
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
