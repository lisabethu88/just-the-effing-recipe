import React from "react";
import welcome from "../assets/welcome.png";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { categoryPaths } from "../data/Constants";
import bell from "../assets/bell.png";
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
        flexWrap: "wrap",
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
          alignItems: "center",
          width: "100%",
          maxWidth: 500,
          textAlign: "center",
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
          {/* <Box
            component={"img"}
            src={bell}
            className="wiggle-button"
            sx={{
              maxWidth: "75px",
              height: "fit-content",
              display: { xs: "none", sm: "block" },
            }}
            alt="Illustration of a bell with a CSS animation causing it to wiggle back and forth."
          /> */}
          {/* <Box
            className="wiggle-button"
            sx={{
              backgroundImage: `url(${picnic_bg})`,
              padding: 1,
              backgroundSize: "100px",
              backgroundPosition: "top left",
              backgroundRepeat: "repeat",
              transition: "0.2s ease-in-out",
              ":hover": {
                transform: "scale(0.95)",
                transition: "0.2s ease-in-out",
              },
            }}
          > */}
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
          {/* </Box> */}
          {/* <Box sx={{ transform: "scaleX(-1)" }}>
            <Box
              component={"img"}
              src={bell}
              className="wiggle-button"
              sx={{
                maxWidth: "75px",
                height: "fit-content",
                display: { xs: "none", sm: "block" },
              }}
              alt="Illustration of a bell with a CSS animation causing it to wiggle back and forth."
            />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
