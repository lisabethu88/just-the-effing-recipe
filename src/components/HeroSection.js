import React from "react";
import welcome from "../assets/welcome.png";
import { Box, Typography, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { categoryPaths } from "../data/Constants";
import picnic_bg from "../assets/picnic-bg.jpg";

const HeroSection = () => {
  const spanStyle = {
    fontFamily: '"Goudy Bookletter 1911", serif',
    textTransform: "lowercase",
    fontSize: "2rem",
    color: "#ad1a00",
  };
  return (
    <Box
      sx={{
        width: "100%",
        margin: "5rem auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 5,
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      <Box
        component="img"
        src={welcome}
        alt={
          "Illustration of stacked recipe cards, with the top card prominently displaying the word 'Welcome'."
        }
        sx={{
          maxWidth: 500,
          width: "100%",
          backgroundColor: "transparent",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          width: "100%",
          maxWidth: 500,
          textAlign: { xs: "center", md: "left" },
          marginX: 2,
          gap: 4,
        }}
      >
        <Typography
          sx={{
            letterSpacing: 1,
            textTransform: "uppercase",
            fontFamily: "Nunito Sans",
            fontWeight: 800,
            color: "#314f37",
            fontSize: "1.5rem",
          }}
        >
          Tired of{" "}
          <Typography variant="span" sx={spanStyle}>
            scrolling
          </Typography>{" "}
          through endless{" "}
          <Typography variant="span" sx={spanStyle}>
            stories
          </Typography>{" "}
          and{" "}
          <Typography variant="span" sx={spanStyle}>
            ads{" "}
          </Typography>
          to find the{" "}
          <Typography variant="span" sx={spanStyle}>
            recipe?{" "}
          </Typography>
          We've got you{" "}
          <Typography variant="span" sx={spanStyle}>
            covered!
          </Typography>
        </Typography>

        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <Button
            className="wiggle-button"
            component={Link}
            to={`${categoryPaths["all"]}`}
            sx={{
              width: "fit-content",

              backgroundImage: `url(${picnic_bg})`,
              backgroundSize: "100px",
              backgroundPosition: "top left",
              backgroundRepeat: "repeat",
              transition: "0.2s ease-in-out",
              ":hover": {
                animation: "none",
              },
            }}
          >
            <Typography
              aria-label="Explore Categories"
              sx={{
                backgroundColor: "#e0ddd5",
                padding: "1rem",
                border: "3px solid #c7a47c",
                fontFamily: "Nunito Sans",
                fontSize: { xs: "1rem", sm: "1.2rem" },
                textTransform: "uppercase",
                fontWeight: 800,
                letterSpacing: 1,
                color: "#2F4B33",
                textWrap: "nowrap",
              }}
            >
              Click here to get started
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
