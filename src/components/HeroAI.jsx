import React from "react";
import { Box, Typography } from "@mui/material";

import picnic_bg from "../assets/picnic-bg.jpg";
import ai_gif from "../assets/ai_gif.gif";
import robot from "../assets/robot.png";

const HeroAI = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        backgroundColor: "#e0ddd5",
        padding: "5rem",
        width: "100%",
      }}
    >
      <Typography
        variant="h1"
        fontFamily='"Goudy Bookletter 1911", serif'
        fontSize="2rem"
        fontWeight={600}
        letterSpacing={1}
        color={"#314f37"}
        sx={{
          textWrap: "wrap",
        }}
        textAlign={"center"}
      >
        Transform Any Recipe to Suit Your Diet with AI!
      </Typography>
      <Typography textAlign={"center"} sx={{ fontFamily: "Nunito Sans" }}>
        Our intelligent recipe assistant can adapt any recipe to your dietary
        needs, whether it's vegan, gluten-free, or more.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          margin: 2,
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${picnic_bg})`,
            padding: 2,
            backgroundSize: "150px",
            backgroundPosition: "top left",
            backgroundRepeat: "repeat",
            maxWidth: 500,
          }}
        >
          <Box
            component="img"
            src={ai_gif}
            sx={{
              border: "3px solid #c7a47c",
            }}
            alt="Animated GIF demonstrating the AI Feedback section, showing a user selecting a diet and recieving suggestions on how to modify the recipe."
          ></Box>
        </Box>
        <Box
          component="img"
          src={robot}
          sx={{
            maxWidth: 300,
            height: 300,
            marginBottom: 3,
          }}
          alt="Illustration of a robot wearing a chef's hat and cooking in a kitchen."
        ></Box>
      </Box>
    </Box>
  );
};

export default HeroAI;
