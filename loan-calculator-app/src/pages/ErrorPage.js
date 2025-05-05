import { Typography, Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={10}>
        <Typography variant="h3" gutterBottom>
          404 - Page Not Found
        </Typography>
        <Typography variant="body1" paragraph>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/"
          size="large"
          sx={{ mt: 3 }}
        >
          Go to Home Page
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorPage;
