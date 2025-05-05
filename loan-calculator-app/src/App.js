import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoanProvider } from "./context/LoanContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";
import CurrencyPage from "./pages/CurrencyPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <LoanProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/currency" element={<CurrencyPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </Router>
    </LoanProvider>
  );
}

export default App;
