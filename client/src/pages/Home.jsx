import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import "../style.css";
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
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Clitecoin%2Ccardano&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=24h&locale=en";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await axios.get(url);
        setCoins(response.data);
        // console.log(response.data);
      } catch (error) {
        // Handle errors and set the error state
        setError(error);
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when the component mounts
    fetchData();
  }, []);

  if (error) {
    // Handle the error condition here, e.g., show an error message to the user.
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <Nav />
        <Header />
        <div>
          <span className="first-content">
            {coins.length >= 2 && (
              <>
                {/* Render SmallContainer components for the first two cryptocurrencies */}
                <SmallContainer
                  coinData={coins[0]}
                  svgIcon={<BitCoin />}
                  growth={`${coins[0].price_change_percentage_24h.toFixed(2)}%`}
                  name={`Bitcoin - ${coins[0].symbol.toUpperCase()}`}
                />
                <SmallContainer
                  coinData={coins[1]}
                  svgIcon={<EthereumIcon />}
                  growth={`${coins[1].price_change_percentage_24h.toFixed(2)}%`}
                  name={`Ethereum - ${coins[1].symbol.toUpperCase()}`}
                />
              </>
            )}
          </span>
          <span className="second-content">
            {coins.length >= 4 && (
              <>
                {/* Render SmallContainer components for the third and fourth cryptocurrencies */}
                <SmallContainer
                  coinData={coins[3]}
                  svgIcon={<LiteCoinIcon />}
                  growth={`${coins[3].price_change_percentage_24h.toFixed(2)}%`}
                  name={`Litecoin - ${coins[3].symbol.toUpperCase()}`}
                />
                <SmallContainer
                  coinData={coins[2]}
                  svgIcon={<CardanoIcon />}
                  growth={`${coins[2].price_change_percentage_24h.toFixed(2)}%`}
                  name={`Cardano - ${coins[2].symbol.toUpperCase()}`}
                />
              </>
            )}
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
