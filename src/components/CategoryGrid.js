import React from "react";
import {
  Grid2,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

const CategoryGrid = ({ data }) => {
  return (
    <Grid2 container spacing={2} justifyContent="center" sx={{ marginY: 3 }}>
      {data.length > 0 &&
        data.map((category, index) => (
          <Grid2
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            className="category-grid"
            to={category.path}
            component={Link}
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
                backgroundColor: "white",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 250, height: 150 }}
                image={category.image}
                alt={`Image of ${category.title}, representing the category of ${category.title}.`}
              />
              <CardContent sx={{ backgroundColor: "white", width: 250 }}>
                <Typography
                  variant="h2"
                  align="left"
                  textTransform={"uppercase"}
                  sx={{
                    textDecoration: "none",
                    color: "#ad1a00",
                    fontWeight: 800,
                    letterSpacing: 2,
                    fontSize: "1.25rem",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  {category.title}
                </Typography>
                {category.description && <Divider sx={{ marginY: 2 }} />}

                <Typography
                  variant="body2"
                  sx={{
                    color: "#181818",
                    fontFamily: "Nunito Sans",
                    letterSpacing: 1,
                    fontWeight: 600,
                  }}
                >
                  {category.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
    </Grid2>
  );
};

export default CategoryGrid;
