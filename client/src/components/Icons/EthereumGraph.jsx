import React, { useEffect, useState } from "react";
import axios from "axios";

const EthereumGraph = () => {
  const [ethereumData, setEthereumData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/ethereum"
        );
        // Set the response data to the state variable
        setEthereumData(response.data);
      } catch (error) {
        console.error("Error fetching Ethereum data:", error);
      }
    };

    fetchData();
  }, []);

  // You can use the ethereumData state variable here if needed
  console.log(ethereumData);

  return (
    <div>
      <svg
        width="162"
        height="41"
        viewBox="0 0 162 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 14.8098C9.13205 14.8098 8.75676 21.1766 15.7622 21.1766C22.7676 21.1766 25.7699 34 31.6494 34C37.529 34 40.5313 22.163 45.5351 22.163C50.539 22.163 50.4139 31.3995 58.4201 31.3995C66.4263 31.3995 67.9274 14.8098 74.4324 14.8098C80.9375 14.8098 80.9375 21.1766 87.3174 21.1766C93.6973 21.1766 92.9467 14.8098 101.203 14.8098C109.459 14.8098 110.335 11.4918 115.089 11.4918C119.842 11.4918 121.093 1 129.725 1C138.357 1 135.855 22.163 144.737 22.163C153.619 22.163 150.616 14.8098 162 14.8098"
          stroke="#6154F0"
          strokeWidth="2"
        />
        <path
          d="M15.7622 21.2937C8.75676 21.2937 9.13205 14.8899 0 14.8899V41H162V14.8899C150.616 14.8899 153.619 22.2858 144.737 22.2858C135.855 22.2858 138.357 1 129.725 1C121.093 1 119.842 11.5527 115.089 11.5527C110.335 11.5527 109.459 14.8899 101.203 14.8899C92.9467 14.8899 93.6973 21.2937 87.3174 21.2937C80.9375 21.2937 80.9375 14.8899 74.4324 14.8899C67.9274 14.8899 66.4263 31.5759 58.4201 31.5759C50.4139 31.5759 50.539 22.2858 45.5351 22.2858C40.5313 22.2858 37.529 34.1915 31.6494 34.1915C25.7699 34.1915 22.7676 21.2937 15.7622 21.2937Z"
          fill="url(#paint0_linear_2301_706)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2301_706"
            x1="83.4545"
            y1="1"
            x2="83.4395"
            y2="41.0009"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#001AFF" stopOpacity="0.2" />
            <stop offset="1" stopColor="#0029FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default EthereumGraph;
