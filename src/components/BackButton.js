import React from "react";
import { Button, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useLocation } from "react-router-dom";
import picnic_bg from "../assets/picnic-bg.jpg";

const BackButton = ({ handleSubmit, bgColor }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    const pathSegments = location.pathname.split("/"); // Split the current path
    pathSegments.pop(); // Remove the last segment to get the parent path
    const parentPath = pathSegments.join("/") || "/"; // Join back to form the parent path
    navigate(parentPath); // Navigate to the calculated parent path
  };

  return (
    <Box sx={{ marginY: 3 }}>
      <Button
        onClick={handleSubmit ? () => handleSubmit() : handleBack}
        sx={{
          borderRadius: 0,
          transition: "0.3s ease-in-out",
          padding: 0,
          margin: 0.5,
          boxShadow: 2,
          backgroundColor: "#5c5c5c59",
          ":hover": {
            transition: "0.3s ease-in-out",
            padding: 0.5,
            backgroundImage: `url(${picnic_bg})`,
            backgroundSize: "50px",
            backgroundPosition: "top left",
            backgroundRepeat: "repeat",
            margin: 0,
            boxShadow: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            backgroundColor: bgColor ? bgColor : "#e0ddd5",
            alignItems: "center",
            padding: 1,
          }}
        >
          <ArrowBackIcon sx={{ color: "#314f37", marginRight: 1 }} />
          <Typography
            variant="p"
            align="left"
            textTransform={"uppercase"}
            sx={{
              fontSize: "1rem",
              textDecoration: "none",
              color: "#314f37",
              fontWeight: 800,
              letterSpacing: 2,
              fontFamily: "Nunito Sans",
            }}
          >
            Go Back
          </Typography>
        </Box>
      </Button>
    </Box>
  );
};

export default BackButton;
