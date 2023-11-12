import React from "react";
import "./smallContainer.css";
import SmallUpArrow from "../Icons/SmallUpArrow";
import SmallDownArrow from "../Icons/SmallDownArrow";

/**
 * SmallContainer component displays a small container with cryptocurrency information.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.coinData - Data object containing cryptocurrency information.
 * @param {ReactElement} props.svgIcon - SVG icon representing the cryptocurrency.
 * @param {string} props.growth - Percentage change in price for the cryptocurrency.
 * @param {string} props.name - Name and symbol of the cryptocurrency.
 * @param {string} props.className - Additional CSS class for styling purposes.
 * @returns {ReactElement} SmallContainer component displaying cryptocurrency information.
 */
const SmallContainer = ({ coinData, svgIcon, growth, name, className }) => {
  try {
    // Check if coinData or current_price is missing, return null if so
    if (!coinData || !coinData.current_price) {
      return null;
    }

    // Format current price based on the cryptocurrency symbol
    let formattedPrice;
    if (coinData.symbol === "ada") {
      formattedPrice = coinData.current_price.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    } else {
      formattedPrice = coinData.current_price.toLocaleString("en-US", {
        maximumFractionDigits: 0,
      });
    }

    // Determine arrow icon based on positive or negative growth
    const isPositiveGrowth = parseFloat(growth) > 0;
    const arrowIcon = isPositiveGrowth ? <SmallUpArrow /> : <SmallDownArrow />;

    // Apply green or red color class based on positive or negative growth
    const colorClass = isPositiveGrowth ? "green" : "red";

    // Render the small container with cryptocurrency information
    return (
      <div className={`small-container ${className}`}>
        <div className="small-div-top">
          <span className="svgIcon">{svgIcon}</span>
          <span className={`growth ${colorClass}`}>
            {arrowIcon} {growth}
          </span>
        </div>
        <div className="small-div-bottom">
          <div className="amount">${formattedPrice}</div>
          <div className="name">{name}</div>
        </div>
      </div>
    );
  } catch (error) {
    // Handle errors and display an error message
    console.error("Error in SmallContainer component:", error);
    return <div className="error-message">Error loading data</div>;
  }
};

export default SmallContainer;
