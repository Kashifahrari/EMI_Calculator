import { useState, useEffect, useContext } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { LoanContext } from "../context/LoanContext";

const CurrencyConverter = () => {
  const { emi } = useContext(LoanContext);
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch available currencies
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        setCurrencies(Object.keys(response.data.rates));
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchCurrencies();
  }, []);

  const handleConvert = async () => {
    if (!emi) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const rate = response.data.rates[toCurrency];
      setExchangeRate(rate);
      setConvertedAmount((emi * rate).toFixed(2));
    } catch (error) {
      console.error("Error converting currency:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Currency Converter
      </Typography>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="EMI Amount" value={emi || ""} disabled />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Select
            fullWidth
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography align="center">to</Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Select
            fullWidth
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConvert}
            disabled={!emi || loading}
            fullWidth
          >
            Convert
          </Button>
        </Grid>
        {exchangeRate && convertedAmount && (
          <Grid item xs={12}>
            <Typography>
              Exchange Rate: 1 {fromCurrency} = {exchangeRate.toFixed(6)}{" "}
              {toCurrency}
            </Typography>
            <Typography variant="h6">
              Converted Amount: {convertedAmount} {toCurrency}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export default CurrencyConverter;
