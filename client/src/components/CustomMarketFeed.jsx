// CustomMarketFeed.js
import React from "react";
import SmallUpArrow from "./Icons/SmallUpArrow";
import SmallDownArrow from "./Icons/SmallDownArrow";

const CustomMarketFeed = ({
  svgIcon,
  title,
  info,
  name,
  change,
  col,
  price,
  graph,
}) => {
  // Check if 'change' is a valid number
  const isValidChange = !isNaN(parseFloat(change));

  // Determine if the change is positive or negative
  const isPositiveChange = isValidChange ? parseFloat(change) > 0 : false;

  return (
    <div className="market-data">
      {/* Display the SVG icon */}
      <span className="market-icons">{svgIcon}</span>

      <div className="market-separate">
        {/* Display the title and information */}
        <span className="market-title">{title}</span>
        <span className="market-info">{info}</span>
      </div>

      <div className="market-separate">
        {/* Display the name and change information */}
        <span className="market-name">{name}</span>

        <div className="market-change-container">
          {/* Display the change value and arrow icon based on positive/negative change */}
          <span className={`market-change ${isPositiveChange ? 'green' : 'red'}`}>
            {isValidChange ? change : "N/A"} {/* Display "N/A" if 'change' is not a valid number */}
          </span>

          {isPositiveChange ? <SmallUpArrow className="green" /> : <SmallDownArrow className="red" />}
        </div>
      </div>

      <div className="market-separate">
        {/* Display additional information (col) and the price */}
        <span className="market-col">{col}</span>
        <span className="market-price"> ${isValidChange ? price : "N/A"}</span> {/* Display "N/A" if 'price' is not a valid number */}
      </div>

      <span className="market-graph">{graph}</span>
    </div>
  );
};

export default CustomMarketFeed;
