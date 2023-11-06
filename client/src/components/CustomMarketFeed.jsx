import React from "react";
import "../components/MarketContainer/marketContainer.css";

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
  return (
    <div className="market-data">
      <span className="market-icons">{svgIcon}</span>
      <div className="market-seperate">
        <span className="market-title">{title}</span>

        <span className="market-info">{info}</span>
      </div>
      <div className="market-seperate">
        <span className="market-name">{name}</span>
        <span className="market-change">{change} </span>
      </div>
      <div className="market-seperate">
        <span className="market-col">{col}</span>
        <span className="market-price"> ${price}</span>
      </div>
      <span className="market-graph">{graph}</span>
    </div>
  );
};

export default CustomMarketFeed;
