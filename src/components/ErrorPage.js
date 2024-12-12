import React from "react";
import { Box, Typography } from "@mui/material";
import whoops from "../assets/whoops.png";
import BackButton from "./BackButton";

const ErrorPage = () => {
  return (
    <Box component="main" sx={{ padding: 3, textAlign: "center" }}>
      <Box
        component={"img"}
        src={whoops}
        sx={{ maxWidth: 500, margin: 5, width: "100%" }}
        alt={
          "Illustration of recipe cards, with the top card displaying the word 'Whoops,' used to indicate a page not found."
        }
      ></Box>
      <Typography>
        The page you're looking for might have been moved, deleted, or never
        existed.
      </Typography>

      <BackButton />
    </Box>
  );
};

export default ErrorPage;
