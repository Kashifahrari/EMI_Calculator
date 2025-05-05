import { createContext, useState } from "react";

export const LoanContext = createContext();

export const LoanProvider = ({ children }) => {
  const [emi, setEmi] = useState(null);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);
  const [loading, setLoading] = useState(false);

  const calculateEMI = ({ principal, interestRate, loanTerm }) => {
    setLoading(true);

    // Convert years to months
    const months = loanTerm * 12;
    // Monthly interest rate
    const monthlyRate = interestRate / 12 / 100;

    // EMI calculation using the formula: EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    setEmi(emiValue.toFixed(2));

    // Generate amortization schedule
    let balance = principal;
    const schedule = [];

    for (let i = 1; i <= months; i++) {
      const interest = balance * monthlyRate;
      const principalPaid = emiValue - interest;
      balance -= principalPaid;

      schedule.push({
        month: i,
        payment: emiValue.toFixed(2),
        principal: principalPaid.toFixed(2),
        interest: interest.toFixed(2),
        balance: Math.abs(balance.toFixed(2)),
      });
    }

    setAmortizationSchedule(schedule);
    setLoading(false);
  };

  return (
    <LoanContext.Provider
      value={{ emi, amortizationSchedule, calculateEMI, loading }}
    >
      {children}
    </LoanContext.Provider>
  );
};
