import React from "react";
import "./transactionsContainer.css";
import CustomTransactionsFeed from "../CustomTransactionsFeed";
import TransDecrease from "../Icons/TransDecrease";

const TransactionsData = ({ svgIcon, title, info, amount, date, time }) => {
  const transactionsData = [
    {
      svgIcon: <TransDecrease />,
      title: "Ethereum",
      info: "Received",
      amount: "24,102",
      date: "Today",
      time: "19:30",
    },
    {
      svgIcon: <TransDecrease />,
      title: "Bitcoin",
      info: "Buy",
      amount: "4,157",
      date: "Today",
      time: "14:32",
    },
    {
      svgIcon: <TransDecrease />,
      title: "Bitcoin",
      info: "Buy",
      amount: "64,784",
      date: "Today",
      time: "13:50",
    },
    {
      svgIcon: <TransDecrease />,
      title: "Litcoin",
      info: "Buy",
      amount: "14,265",
      date: "Today",
      time: "09:38",
    },
  ];

  return (
    <div className="transactions-container">
      <h4 className="market-header">Transactions</h4>

      {transactionsData.map((item, index) => (
        <CustomTransactionsFeed
          key={index}
          svgIcon={item.svgIcon}
          title={item.title}
          info={item.info}
          amount={item.amount}
          date={item.date}
          time={item.time}
        />
      ))}
    </div>
  );
};

export default TransactionsData;
