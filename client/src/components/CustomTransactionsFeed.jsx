import React from "react";
import "./TransactionsContainer/transactionsContainer.css";

/**
 * CustomTransactionsFeed component displays a transaction item with icon, title, information, amount, date, and time.
 *
 * @param {Object} props - Component properties.
 * @param {ReactElement} props.svgIcon - SVG icon representing the transaction type.
 * @param {string} props.title - Title of the transaction item.
 * @param {string} props.info - Additional information about the transaction.
 * @param {string} props.amount - Transaction amount in USD.
 * @param {string} props.date - Date of the transaction.
 * @param {string} props.time - Time of the transaction.
 * @returns {ReactElement} CustomTransactionsFeed component displaying transaction details.
 */
const CustomTransactionsFeed = ({
  svgIcon,
  title,
  info,
  amount,
  date,
  time,
}) => {
  try {
    // Render transaction item with icon, title, information, amount, date, and time
    return (
      <div className="trans-data">
        <span className="trans-icons">{svgIcon}</span>
        <div className="trans-separate">
          <span className="trans-title">{title}</span>
          <span className="trans-info">{info}</span>
        </div>

        <div className="trans-separate col-2">
          <span className="trans-amount">${amount}</span>
          <div className="time-stamp">
            <span className="trans-date">{date} </span>
            <span className="trans-time">{time}</span>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    // Handle errors and display an error message
    console.error("Error rendering transaction item:", error);
    return <div className="error-message">Error loading transaction item</div>;
  }
};

export default CustomTransactionsFeed;
