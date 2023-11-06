import React from "react";
import "./pricesContainer.css";

const PricesContainer = () => {
  return (
    <div className="prices-container">
      <h4 className="price-header">BTC Prices</h4>
      <span className="y-axis">0</span>
      <ul className="months">
        <li className="month">May</li>
        <li className="month">June</li>
        <li className="month">July</li>
        <li className="month">Aug</li>
        <li className="month">Sep</li>
        <li className="month">Oct</li>
      </ul>
    </div>
  );
};

export default PricesContainer;
