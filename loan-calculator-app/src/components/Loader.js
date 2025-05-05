import { Box, CircularProgress, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="200px"
    >
      <CircularProgress size={60} thickness={4} />
      <Typography variant="h6" mt={2}>
        Calculating...
      </Typography>
    </Box>
  );
};

export default Loader;
