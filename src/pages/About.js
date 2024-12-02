import React from "react";
import { Box, Typography } from "@mui/material";
import about from "../assets/about.png";
import croissant from "../assets/croissant.png";

const About = () => {
  const spanStyle = {
    fontFamily: '"Goudy Bookletter 1911", serif',
    textTransform: "none",
    fontSize: "2rem",
    color: "#d4452c",
  };
  return (
    <Box component="main">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          src={croissant}
          sx={{
            maxWidth: { sm: 100, md: 150 },
            width: "100%",
            display: { xs: "none", sm: "block" },
          }}
        ></Box>

        <Box
          component="img"
          src={about}
          sx={{ maxWidth: { xs: 300, md: 400 }, margin: 2 }}
        ></Box>
        <Box
          component="img"
          src={croissant}
          sx={{
            maxWidth: { sm: 100, md: 150 },
            width: "100%",
            transform: "scaleX(-1)",
            display: { xs: "none", sm: "block" },
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: 1000,
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
            margin: 2,
          }}
        >
          Welcome to{" "}
          <Typography variant="span" sx={spanStyle}>
            Just the Effing Recipe
          </Typography>
          , where{" "}
          <Typography variant="span" sx={spanStyle}>
            simplicity
          </Typography>{" "}
          meets{" "}
          <Typography variant="span" sx={spanStyle}>
            practicality
          </Typography>
          . Our mission is to strip away the unnecessary{" "}
          <Typography variant="span" sx={spanStyle}>
            clutter
          </Typography>{" "}
          and provide you with{" "}
          <Typography variant="span" sx={spanStyle}>
            clear, straightforward recipes
          </Typography>{" "}
          that get right to the point. Whether you're a{" "}
          <Typography variant="span" sx={spanStyle}>
            seasoned chef
          </Typography>{" "}
          or a{" "}
          <Typography variant="span" sx={spanStyle}>
            kitchen newbie
          </Typography>
          , we focus on what matters most: the{" "}
          <Typography variant="span" sx={spanStyle} ingredients></Typography>{" "}
          and the{" "}
          <Typography variant="span" sx={spanStyle}>
            steps
          </Typography>{" "}
          to create a delicious meal. Inspired by the frustrations of scrolling
          through endless{" "}
          <Typography variant="span" sx={spanStyle}>
            backstories
          </Typography>{" "}
          and{" "}
          <Typography variant="span" sx={spanStyle}>
            ads
          </Typography>
          , we created this platform to make cooking{" "}
          <Typography variant="span" sx={spanStyle}>
            stress-free
          </Typography>{" "}
          and{" "}
          <Typography variant="span" sx={spanStyle}>
            efficient
          </Typography>
          . With an added touch of{" "}
          <Typography variant="span" sx={spanStyle}>
            AI
          </Typography>
          , we make it even easier to{" "}
          <Typography variant="span" sx={spanStyle}>
            customize recipes
          </Typography>{" "}
          for your{" "}
          <Typography variant="span" sx={spanStyle}>
            dietary needs
          </Typography>
          —because your{" "}
          <Typography variant="span" sx={spanStyle}>
            time
          </Typography>{" "}
          and{" "}
          <Typography variant="span" sx={spanStyle}>
            taste
          </Typography>{" "}
          matter. <br />
          <br />
          Cooking made simple,
          <Typography
            variant="span"
            sx={{ ...spanStyle, textTransform: "none" }}
          >
            {" "}
            just for you.
          </Typography>
        </Typography>{" "}
      </Box>
    </Box>
  );
};

export default About;
