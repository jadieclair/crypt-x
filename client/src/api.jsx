// api.js
import axios from "axios";

const coinGeckoApi = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

export const fetchMarketData = async () => {
  try {
    const response = await coinGeckoApi.get("/coins/markets", {
      params: {
        vs_currency: "usd", // You can change the currency as needed
        ids: "ethereum,bitcoin,litecoin,cardano", // Add more coins if necessary
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


