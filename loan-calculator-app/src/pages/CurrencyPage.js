import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import CurrencyConverter from "../components/CurrencyConverter";

const CurrencyPage = () => {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/USD`
        );
        setRates(response.data.rates);
      } catch (err) {
        setError("Failed to fetch currency rates. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Currency Exchange Rates
      </Typography>

      <CurrencyConverter />

      <Paper elevation={3} sx={{ mt: 4, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Current Exchange Rates (Base: USD)
        </Typography>

        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Currency</TableCell>
                  <TableCell align="right">Rate</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(rates).map(([currency, rate]) => (
                  <TableRow key={currency}>
                    <TableCell>{currency}</TableCell>
                    <TableCell align="right">{rate.toFixed(6)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Container>
  );
};

export default CurrencyPage;
