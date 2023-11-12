import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import "./pricesContainer.css";

const PricesContainer = () => {
  const [prices, setPrices] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180"
          // {
          //   params: {
          //     vs_currency: "usd",
          //     days: "180",
          //   },
          // }
        );

        const pricesData = response.data.prices;
        const formattedPrices = pricesData.map((entry) => ({
          date: new Date(entry[0]),
          price: entry[1],
        }));

        setPrices(formattedPrices);
      } catch (error) {
        console.error("Error fetching data from CoinGecko API:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!chartRef.current) return;

    // Clear the canvas
    const ctx = chartRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Check if there is an existing chart and destroy it
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    // Check if there are prices before initializing the chart
    if (prices.length === 0) {
      return;
    }

    // Initialize a new chart instance
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: prices.map((entry) => entry.date),
        datasets: [
          {
            label: "BTC Prices",
            data: prices.map((entry) => entry.price.toFixed(2)),
            fill: false,
            borderColor: " #6154f0",
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day",
            },
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            title: {
              display: true,
              text: "Price (USD)",
            },
          },
        },
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            enabled: true,
            intersect: false,
          },
        },
      },
    });

    // Save the chart instance to chartRef
    chartRef.current.chart = chart;
  }, [prices]);

  return (
    <div className="prices-container">
      {/* <h4 className="price-header">BTC Prices</h4> */}
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PricesContainer;
