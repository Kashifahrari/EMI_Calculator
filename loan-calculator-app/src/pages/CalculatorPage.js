import { useContext } from "react";
import { Container, Typography, CircularProgress } from "@mui/material";
import { LoanContext } from "../context/LoanContext";
import EMIForm from "../components/EMIForm";
import AmortizationTable from "../components/AmortizationTable";

const CalculatorPage = () => {
  const { emi, amortizationSchedule, loading } = useContext(LoanContext);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Loan Calculator
      </Typography>

      <EMIForm />

      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <CircularProgress />
        </div>
      )}

      {emi && (
        <div style={{ marginTop: "20px" }}>
          <Typography variant="h6">EMI: {emi} (per month)</Typography>
        </div>
      )}

      <AmortizationTable schedule={amortizationSchedule} />
    </Container>
  );
};

export default CalculatorPage;
