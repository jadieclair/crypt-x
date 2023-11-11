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
import LitecoinGraph from "../Icons/LitecoinGraph";
import CardanoGraph from "../Icons/CardanoGraph";
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

  const getSvgIcon = (name) => {
    switch (name) {
      case "Ethereum":
        return <MarketEthereum />;
      case "Bitcoin":
        return <MarketBitcoin />;
      case "Litecoin":
        return <MarketLitecoin />;
      case "Cardano":
        return <MarketCardano />;
      default:
        return <div>Custom Icon</div>;
    }
  };

  const getGraph = (name) => {
    switch (name) {
      case "Ethereum":
        return <EthereumGraph />;
      case "Bitcoin":
        return <BitcoinGraph />;
      case "Litecoin":
        return <LitecoinGraph />;
      case "Cardano":
        return <CardanoGraph />;
      default:
        return <div>Custom Graph</div>;
    }
  };

  return (
    <div className="market-container">
      <h4 className="market-header">Live Market</h4>

      {marketData.map((item, index) => {
        const isPositiveChange = parseFloat(item.price_change_percentage_24h) > 0;

        return (
          <CustomMarketFeed
            key={index}
            svgIcon={getSvgIcon(item.name)}
            title={item.name}
            info={`(${item.symbol} / USD)`}
            name="Change"
            change={`${item.price_change_percentage_24h.toFixed(2)}%`}
            col="Price"
            price={item.current_price.toFixed(2)}
            graph={getGraph(item.name)}
            textColor={isPositiveChange ? "green" : "red"}
            growth={`${item.price_change_percentage_24h.toFixed(2)}%`}
          >
            {isPositiveChange ? (
              <div className="arrow-container">
                <SmallUpArrow className="green" />
              </div>
            ) : (
              <div className="arrow-container">
                <SmallDownArrow className="red" />
              </div>
            )}
          </CustomMarketFeed>
        );
      })}
    </div>
  );
};

export default MarketContainer;
