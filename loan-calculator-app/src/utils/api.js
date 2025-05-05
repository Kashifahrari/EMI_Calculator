import axios from "axios";

const API_BASE = "https://api.exchangerate-api.com/v4";

export const fetchExchangeRates = async (baseCurrency = "USD") => {
  try {
    const response = await axios.get(`${API_BASE}/latest/${baseCurrency}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw error;
  }
};

export const convertCurrency = async (fromCurrency, toCurrency, amount) => {
  try {
    const rates = await fetchExchangeRates(fromCurrency);
    const rate = rates.rates[toCurrency];
    return {
      rate,
      convertedAmount: amount * rate,
    };
  } catch (error) {
    console.error("Error converting currency:", error);
    throw error;
  }
};
