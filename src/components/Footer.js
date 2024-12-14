import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import FloralDivider from "./FloralDivider";

export default function Footer() {

  return (
    <Box
      sx={{
        width: "100%",
        bottom: 0,
        position: "absolute",
        backgroundColor: "white",
        height: 100,
        padding: 2,
      }}
      component={"footer"}
    >
      <FloralDivider />
      <Typography
        label=""
        sx={{
          color: "#ad1a00",
          fontFamily: "Nunito Sans",
          fontWeight: 800,
          letterSpacing: 1,
          textTransform: "uppercase",
          // textShadow: "1px 2px 0px rgba(255,124,61,0.24)",
          height: "fit-content",
          //backgroundColor: "#e0ddd5",
          alignItems: "center",
          textAlign: "center",
          flexWrap: "wrap",
          padding: 1,
          gap: 2,
        }}
      >
        © 2024 Just the Effing Recipe. All Rights Reserved
      </Typography>
    </Box>
  );
}
