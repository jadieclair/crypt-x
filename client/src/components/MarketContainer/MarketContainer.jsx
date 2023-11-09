import React, { useEffect, useState } from "react";
import "./marketContainer.css";
import CustomMarketFeed from "../CustomMarketFeed";
import axios from "axios";
import MarketEthereum from "../Icons/MarketEthereum";
import MarketBitcoin from "../Icons/MarketBitcoin";
import MarketLitecoin from "../Icons/MarketLitecoin";
import MarketCardano from "../Icons/MarketCardano";
import EthereumGraph from "../Icons/EthereumGraph";
import BitcoinGraph from "../Icons/BitcoinGraph";
import LitecoinGraph from "../Icons/LitecoinGraph"; // Import LitecoinGraph
import CardanoGraph from "../Icons/CardanoGraph"; // Import CardanoGraph
import SmallUpArrow from "../Icons/SmallUpArrow";
import SmallDownArrow from "../Icons/SmallDownArrow";

const MarketContainer = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: "ethereum,bitcoin,litecoin,cardano",
            },
          }
        );
        setMarketData(response.data);
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };

    fetchMarketData().catch((error) => {
      console.error("Error in fetchMarketData:", error);
    });
  }, []);

  return (
    <div className="market-container">
      <h4 className="market-header">Live Market</h4>

      {marketData.map((item, index) => {
        // Determine arrow icon based on positive or negative growth
        const isPositiveGrowth = parseFloat(item.price_change_percentage_24h) > 2;
        const arrowIcon = isPositiveGrowth ? <SmallUpArrow /> : <SmallDownArrow />;

        // Apply green or orange color class based on positive or negative growth
        const colorClass = isPositiveGrowth ? "green" : "orange";

        // Determine if the price change is an increase or decrease
        const isIncrease = item.price_change_percentage_24h > 2;
        const isDecrease = item.price_change_percentage_24h < -2;

        return (
          <CustomMarketFeed
            key={index}
            svgIcon={
              item.name === "Ethereum" ? <MarketEthereum /> :
              item.name === "Bitcoin" ? <MarketBitcoin /> :
              item.name === "Litecoin" ? <MarketLitecoin /> :
              item.name === "Cardano" ? <MarketCardano /> :
              <div>Custom Icon</div>
            }
            title={item.name}
            info={`(${item.symbol} / USD)`}
            name="Change"
            change={`${item.price_change_percentage_24h.toFixed(2)}%`}
            col="Price"
            price={item.current_price.toFixed(2)}
            graph={
              item.name === "Ethereum" ? <EthereumGraph /> :
              item.name === "Bitcoin" ? <BitcoinGraph /> :
              item.name === "Litecoin" ? <LitecoinGraph /> :
              item.name === "Cardano" ? <CardanoGraph /> :
              <div>Custom Graph</div>
            }
            textColor={colorClass}
          >
            {arrowIcon}
            {isIncrease && <div>Price Increased</div>}
            {isDecrease && <div>Price Decreased</div>}
          </CustomMarketFeed>
        );
      })}
    </div>
  );
};

export default MarketContainer;
