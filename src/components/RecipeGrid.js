import React from "react";
import { Grid2, Card, CardContent, Typography, CardMedia } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const RecipeGrid = ({ data }) => {
  const location = useLocation();
  return (
    <Grid2 container spacing={2} justifyContent="center" sx={{ marginY: 3 }}>
      {data &&
        data.map((meal, index) => (
          <Grid2
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            component={Link}
            to={`${location.pathname}/${meal.id}`}
            state={{ meal }}
            className="category-grid"
            sx={{
              padding: 3,
              transition: "0.2s ease-in-out",
              ":hover": {
                transform: "scale(1.05)",
                transition: "0.2s ease-in-out",
              },
              boxShadow: 2,
            }}
          >
            <Card
              elevation={6}
              sx={{
                cursor: "pointer",
                borderRadius: 0,
                transition: "0.2s ease-in-out",

                backgroundColor: "#e0ddd5",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 250, height: 150 }}
                image={meal.image}
                alt={meal.title}
              />
              <CardContent sx={{ backgroundColor: "#e0ddd5", width: 250 }}>
                <Typography
                  variant="h6"
                  align="left"
                  textTransform={"uppercase"}
                  sx={{
                    textDecoration: "none",
                    color: "#d4452c",
                    fontWeight: 800,
                    letterSpacing: 2,
                    fontSize: "1rem",
                  }}
                >
                  {meal.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
    </Grid2>
  );
};

export default RecipeGrid;
