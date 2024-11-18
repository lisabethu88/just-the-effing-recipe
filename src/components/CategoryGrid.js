import React from "react";
import { Grid2, Card, CardContent, Typography, CardMedia } from "@mui/material";
import mainCourse from "../assets/main-course.jpg";

const categories = [
  { title: "Breakfast", image: "breakfast.jpg" },
  { title: "Lunch", image: "lunch.jpg" },
  { title: "Main Course", image: mainCourse },
  { title: "Snacks", image: "snacks.jpg" },
];

const CategoryGrid = () => {
  return (
    <Grid2 container spacing={2} justifyContent="center" margin={1}>
      {categories.map((category, index) => (
        <Grid2 item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="140"
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
