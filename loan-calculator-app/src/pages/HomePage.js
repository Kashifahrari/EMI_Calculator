import { Typography, Button, Grid, Paper, Box } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom>
          Welcome to Loan Calculator
        </Typography>
        <Typography variant="body1" paragraph>
          Calculate your Equated Monthly Installment (EMI), view payment
          schedules, and convert amounts to different currencies using live
          exchange rates.
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
          <Typography variant="h5" gutterBottom>
            EMI Calculator
          </Typography>
          <Typography paragraph>
            Calculate your monthly loan payments based on principal amount,
            interest rate, and loan term.
          </Typography>
          <Box mt={2}>
            <Button
              variant="contained"
              component={Link}
              to="/calculator"
              size="large"
            >
              Go to Calculator
            </Button>
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
          <Typography variant="h5" gutterBottom>
            Currency Converter
          </Typography>
          <Typography paragraph>
            Convert your EMI amounts to different currencies using real-time
            exchange rates from the ExchangeRate API.
          </Typography>
          <Box mt={2}>
            <Button
              variant="contained"
              component={Link}
              to="/currency"
              size="large"
            >
              View Currency Rates
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
