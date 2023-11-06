import React from "react";
import "./marketContainer.css";
import MarketEthereum from "../Icons/MarketEthereum";
import MarketBitcoin from "../Icons/MarketBitcoin";
import MarketLitecoin from "../Icons/MarketLitecoin";
import MarketCardano from "../Icons/MarketCardano";
import EthereumGraph from "../Icons/EthereumGraph";
import BitcoinGraph from "../Icons/BitcoinGraph";
import LitecoinGraph from "../Icons/LitecoinGraph";
import CardanoGraph from "../Icons/CardanoGraph";
import CustomMarketFeed from "../CustomMarketFeed";

const MarketContainer = ({
  svgIcon,
  title,
  info,
  name,
  change,
  col,
  price,
  graph,
}) => {
  const marketData = [
    {
      svgIcon: <MarketEthereum />,
      title: "Ethereum",
      info: "ETH / USDT",
      name: "Change",
      change: "+14.02%",
      col: "Price",
      price: "39,786",
      graph: <EthereumGraph />,
    },
    {
      svgIcon: <MarketBitcoin />,
      title: "Bitcoin",
      info: "BTC / USDT",
      name: "Change",
      change: "+4.02%",
      col: "Price",
      price: "21,786",
      graph: <BitcoinGraph />,
    },
    {
      svgIcon: <MarketLitecoin />,
      title: "Litcoin",
      info: "BTC / USDT",
      name: "Change",
      change: "-4.02%",
      col: "Price",
      price: "9,786",
      graph: <LitecoinGraph />,
    },
    {
      svgIcon: <MarketCardano />,
      title: "Cardano",
      info: "ADA / USDT",
      name: "Change",
      change: "+0.02%",
      col: "Price",
      price: "4,786",
      graph: <CardanoGraph />,
    },
  ];

  return (
    <div className="market-container">
      <h4 className="market-header">Live Market</h4>

      {marketData.map((item, index) => (
        <CustomMarketFeed
          key={index}
          svgIcon={item.svgIcon}
          title={item.title}
          info={item.info}
          name={item.name}
          change={item.change}
          col={item.col}
          price={item.price}
          graph={item.graph}
        />
      ))}
    </div>
  );
};

export default MarketContainer;
