import React from "react";
import "./smallContainer.css";
import StatsIncreaseIcon from "../Icons/StatsIncreaseIcon";

const SmallContainer = ({ svgIcon, growth, amount, name, className }) => {
  return (
    <div className={`small-container ${className}`}>
      <span className="svgIcon">{svgIcon}</span>
      <span className="growth">
        <StatsIncreaseIcon /> {growth}
      </span>
      <span className="amount">${amount}</span>
      <span className="name">{name}</span>
    </div>
  );
};

export default SmallContainer;
