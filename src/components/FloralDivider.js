import React from "react";
import strawberry_border from "../assets/strawberry-border.png";
import { Box, Divider } from "@mui/material";

const FloralDivider = () => {
  return (
    <Box
      component={"img"}
      src={strawberry_border}
      alt={"strawberry vine divider"}
      sx={{
        maxWidth: 350,
        width: "100%",
        margin: "0rem auto",
      }}
    />
  );
};

export default FloralDivider;
