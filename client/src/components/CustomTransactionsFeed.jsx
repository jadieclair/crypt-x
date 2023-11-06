import React from "react";
import "./TransactionsContainer/transactionsContainer.css";

const CustomTransactionsFeed = ({
  svgIcon,
  title,
  info,
  amount,
  date,
  time,
}) => {
  return (
    <div className="trans-data">
      <span className="trans-icons">{svgIcon}</span>
      <div className="trans-seperate">
        <span className="trans-title">{title}</span>
        <span className="trans-info">{info}</span>
      </div>

      <div className="trans-seperate col-2">
        <span className="trans-amount">${amount}</span>
        <div className="time-stamp">
          <span className="trans-date">{date} </span>
          <span className="trans-time">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomTransactionsFeed;
