import React from "react";
import welcome from "../assets/recipe-cards.png";
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
    color: "#d4452c",
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
        alt={"Welcome Recipe Card"}
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
          <Box
            component={"img"}
            src={bell}
            className="wiggle-button"
            sx={{
              maxWidth: "75px",
              height: "fit-content",
              display: { xs: "none", sm: "block" },
            }}
          />
          <Link to={`${categoryPaths["all"]}`}>
            <Box
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
                marginBottom: 3,
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#e0ddd5",
                  width: "fit-content",
                  padding: "1rem",
                  border: "3px solid #c7a47c",
                  fontFamily: "Nunito Sans",
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  fontWeight: 800,
                  letterSpacing: 1,
                  color: "#d4452c",
                }}
              >
                Click here to get started
              </Button>
            </Box>
          </Link>
          <Box sx={{ transform: "scaleX(-1)" }}>
            <Box
              component={"img"}
              src={bell}
              className="wiggle-button"
              sx={{
                maxWidth: "75px",
                height: "fit-content",
                display: { xs: "none", sm: "block" },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
