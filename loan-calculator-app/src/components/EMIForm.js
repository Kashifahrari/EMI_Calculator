import { useState, useContext } from "react";
import { TextField, Button, Grid, Typography, Paper } from "@mui/material";
import { LoanContext } from "../context/LoanContext";

const EMIForm = () => {
  const { calculateEMI } = useContext(LoanContext);
  const [formData, setFormData] = useState({
    principal: "",
    interestRate: "",
    loanTerm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateEMI(formData);
  };

  return (
    <Paper elevation={3} style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Loan Calculator
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Loan Amount"
              name="principal"
              type="number"
              value={formData.principal}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Annual Interest Rate (%)"
              name="interestRate"
              type="number"
              value={formData.interestRate}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Loan Term (Years)"
              name="loanTerm"
              type="number"
              value={formData.loanTerm}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Calculate EMI
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default EMIForm;
