import React from "react";
import strawberry_border from "../assets/strawberry-border.png";
import { Box, Divider } from "@mui/material";

const FloralDivider = () => {
  return (
    <Box
      component={"img"}
      src={strawberry_border}
      alt={
        "Illustration of a strawberry vine used as a decorative page divider, featuring green leaves, small strawberries, and curling tendrils."
      }
      sx={{
        maxWidth: 350,
        width: "100%",
        margin: "0rem auto",
      }}
    />
  );
};

export default FloralDivider;
