import React, { useState, useEffect } from "react";
import axios from "axios";
import "./transactionsContainer.css";
import CustomTransactionsFeed from "../CustomTransactionsFeed";
import TransDecrease from "../Icons/TransDecrease";
import TransIncrease from "../Icons/TransIncrease";

/**
 * TransactionsData component fetches and displays transaction data for cryptocurrencies.
 *
 * @returns {ReactElement} TransactionsData component with transaction information.
 */
const TransactionsData = () => {
  const [transactionsData, setTransactionsData] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Clitecoin%2Ccardano&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=5s&locale=en";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setTransactionsData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    // Call fetchData function when the component mounts or when the URL changes
    fetchData();
  }, [url]);

  return (
    <div className="transactions-container">
      <h4 className="market-header">Transactions</h4>

      {transactionsData.map((item, index) => {
        try {
          // Format current price based on the cryptocurrency symbol
          let formattedPrice;
          if (item.symbol === "ada") {
            formattedPrice = item.current_price.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            });
          } else {
            formattedPrice = item.current_price.toLocaleString("en-US", {
              maximumFractionDigits: 0,
            });
          }

          // Render different icons based on price change
          const transactionIcon =
            item.price_change_percentage_24h >= 0 ? (
              <TransIncrease />
            ) : (
              <TransDecrease />
            );

          // Reflect "Received" for increase, "Buy" for decrease in price
          const transactionInfo =
            item.price_change_percentage_24h >= 0 ? "Received" : "Buy";

          // Use last_updated timestamp from API response to display date and time
          const transactionDate =
            item.last_updated &&
            new Date(item.last_updated).toLocaleDateString();
          const transactionTime =
            item.last_updated &&
            new Date(item.last_updated).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });

          // Render CustomTransactionsFeed component with transaction details
          return (
            <CustomTransactionsFeed
              key={index}
              svgIcon={transactionIcon}
              title={item.name}
              info={transactionInfo}
              amount={formattedPrice}
              date={transactionDate || "N/A"}
              time={transactionTime || "N/A"}
            />
          );
        } catch (error) {
          // Handle errors and display an error message
          console.error("Error processing transaction data: ", error);
          return (
            <div key={index} className="error-message">
              Error loading transaction data
            </div>
          );
        }
      })}
    </div>
  );
};

export default TransactionsData;
