import React from "react";
import { Button, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import picnic_bg from "../assets/picnic-bg.jpg";

const BackButton = ({ handleSubmit, bgColor }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ marginY: 3 }}>
      <Button
        onClick={handleSubmit ? () => handleSubmit() : () => navigate(-1)}
        sx={{
          borderRadius: 0,
          transition: "0.3s ease-in-out",
          padding: 0,
          margin: 0.5,
          boxShadow: 2,
          backgroundColor: "#5c5c5c59",
          //   border: "2px solid #c7a47c",
          ":hover": {
            transition: "0.3s ease-in-out",
            padding: 0.5,
            backgroundImage: `url(${picnic_bg})`,
            backgroundSize: "50px",
            backgroundPosition: "top left",
            backgroundRepeat: "repeat",
            margin: 0,
            boxShadow: 2,
            // border: "2px solid transparent",
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
          <ArrowBackIcon sx={{ color: "#d4452c", marginRight: 1 }} />
          <Typography
            variant="h6"
            align="left"
            textTransform={"uppercase"}
            sx={{
              fontSize: "1rem",
              textDecoration: "none",
              color: "#d4452c",
              fontWeight: 800,
              letterSpacing: 2,
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
