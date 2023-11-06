import React from "react";
import "./home.css";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import SmallContainer from "../components/SmallContainer/SmallContainer";
import PricesContainer from "../components/PricesContainer/PricesContainer";
import MarketContainer from "../components/MarketContainer/MarketContainer";
import TransactionsContainer from "../components/TransactionsContainer/TransactionsContainer";
import BitCoin from "../components/Icons/BitCoin";
import EthereumIcon from "../components/Icons/EthereumIcon";
import LiteCoinIcon from "../components/Icons/LiteCoinIcon";
import CardanoIcon from "../components/Icons/CardanoIcon";

const Home = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <Nav />
        <Header />
        <div>
          <span className="first-content">
            <SmallContainer
              svgIcon={<BitCoin />}
              growth={"+0.25%"}
              amount={"40,291"}
              name={"Bitcoin - BTC"}
            />
            <SmallContainer
              svgIcon={<EthereumIcon />}
              growth={"+0.25%"}
              amount={"18,291"}
              name={"Ethereum - ETH"}
            />
          </span>
          <span className="second-content">
            <SmallContainer
              svgIcon={<LiteCoinIcon />}
              growth={"+0.25%"}
              amount={"8,291"}
              name={"Litecoin - ITL"}
            />
            <SmallContainer
              svgIcon={<CardanoIcon />}
              growth={"-2.05%"}
              amount={"3,291"}
              name={"Cardano - ADA"}
            />
          </span>
        </div>
        <PricesContainer />
        <MarketContainer />
        <TransactionsContainer />
      </div>
    </div>
  );
};

export default Home;
