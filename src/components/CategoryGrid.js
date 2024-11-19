import React from "react";
import { Grid2, Card, CardContent, Typography, CardMedia } from "@mui/material";
import { categories } from "../data/Data";

const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

const CategoryGrid = () => {
  return (
    <Grid2
      container
      spacing={2}
      justifyContent="center"
      sx={{ maxWidth: 700, margin: "1rem auto" }}
    >
      {categories.map((category, index) => (
        <Grid2 item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              sx={{ width: 200 }}
              image={category.image}
              alt={category.title}
            />
            <CardContent>
              <Typography variant="h6" align="center">
                {category.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default CategoryGrid;
