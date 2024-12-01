import React from "react";
import { Box } from "@mui/material";
import whoops from "../assets/whoops.png";
import BackButton from "./BackButton";

const ErrorPage = () => {
  return (
    <Box component="main">
      <Box
        component={"img"}
        src={whoops}
        sx={{ maxWidth: 500, margin: 5, width: "100%" }}
      ></Box>
      The page you're looking for might have been moved, deleted, or never
      existed.
      <BackButton />
    </Box>
  );
};

export default ErrorPage;
