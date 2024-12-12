import React from "react";
import { Box, Typography } from "@mui/material";
import duck from "../assets/duck.png";
import dutch_oven from "../assets/dutch-oven.png";
import onion from "../assets/onion.png";

const PageTitle = ({ title, image }) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e0ddd5",
        marginBottom: 2,
      }}
    >
      {" "}
      <Box
        alt={
          image === "duck"
            ? "Illustration of a cartoon-style duck paired with an herb, placed to the left of the page title."
            : image === "dutch-oven"
            ? "Illustration of a dutch oven paired with an herb, positioned to the left of the page title."
            : "Illustration of a whole onion paired with an herb, located to the left of the page title."
        }
        component={"img"}
        src={
          image === "duck" ? duck : image === "dutch-oven" ? dutch_oven : onion
        }
        sx={{
          width: {
            xs: "100px",
            sm: "150px",
          },
          height: {
            xs: "50px",
            sm: "75px",
          },
          marginX: 1,
        }}
      ></Box>
      <Typography
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
        {title}
      </Typography>
      <Box
        alt={
          image === "duck"
            ? "Illustration of a cartoon-style duck paired with an herb, placed to the right of the page title."
            : image === "dutch-oven"
            ? "Illustration of a dutch oven paired with an herb, positioned to the right of the page title."
            : "Illustration of a whole onion paired with an herb, located to the right of the page title."
        }
        component={"img"}
        src={
          image === "duck" ? duck : image === "dutch-oven" ? dutch_oven : onion
        }
        sx={{
          width: {
            xs: "100px",
            sm: "150px",
          },
          height: {
            xs: "50px",
            sm: "75px",
          },
          transform: "scaleX(-1)",
          marginX: 1,
        }}
      ></Box>
    </Box>
  );
};

export default PageTitle;
