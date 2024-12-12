import React from "react";
import { Box } from "@mui/material";
import HeroSection from "../components/HeroSection";

import HeroAI from "../components/HeroAI";

const Home = () => {
  return (
    <Box component="main">
      <HeroSection />
      <HeroAI></HeroAI>
    </Box>
  );
};

export default Home;
