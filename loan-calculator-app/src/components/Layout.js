import { Container, CssBaseline } from "@mui/material";
import Header from "./Header";
import Loader from "./Loader";
import { useContext } from "react";
import { LoanContext } from "../context/LoanContext";

const Layout = ({ children }) => {
  const { loading } = useContext(LoanContext);

  return (
    <>
      <CssBaseline />
      <Header />
      <Container
        maxWidth="lg"
        style={{ marginTop: "20px", marginBottom: "40px" }}
      >
        {loading ? <Loader /> : children}
      </Container>
    </>
  );
};

export default Layout;
