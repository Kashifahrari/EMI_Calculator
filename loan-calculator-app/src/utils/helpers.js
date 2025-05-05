export const calculateEMI = (principal, annualRate, years) => {
  const months = years * 12;
  const monthlyRate = annualRate / 12 / 100;

  if (monthlyRate === 0) {
    return principal / months;
  }

  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  );
};

export const generateSchedule = (principal, annualRate, years, emi) => {
  const months = years * 12;
  const monthlyRate = annualRate / 12 / 100;
  let balance = principal;
  const schedule = [];

  for (let i = 1; i <= months; i++) {
    const interest = balance * monthlyRate;
    const principalPaid = emi - interest;
    balance -= principalPaid;

    schedule.push({
      month: i,
      payment: emi.toFixed(2),
      principal: principalPaid.toFixed(2),
      interest: interest.toFixed(2),
      balance: Math.abs(balance.toFixed(2)),
    });
  }

  return schedule;
};

export const formatCurrency = (amount, currency = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
};
