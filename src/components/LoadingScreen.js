import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const LoadingScreen = () => {
  return (
    <Box component="main">
      <Typography
        margin={5}
        variant="h1"
        fontFamily='"Goudy Bookletter 1911", serif'
        fontSize={{ xs: "2rem", sm: "3rem" }}
        fontWeight={600}
        letterSpacing={1}
        color={"#d4452c"}
        sx={{
          textWrap: "wrap",
        }}
        textAlign={"center"}
      >
        Loading...
      </Typography>
      <CircularProgress sx={{ color: "#314f37" }} />
    </Box>
  );
};

export default LoadingScreen;
