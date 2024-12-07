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
            <Link to={category.path} className="no-underline !important">
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
                  image={category.image}
                  alt={category.title}
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
                      // textShadow: "1px 2px 0px rgba(255,124,61,0.24)",
                    }}
                  >
                    {category.title}
                  </Typography>
                  {category.description && <Divider sx={{ marginY: 2 }} />}

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontFamily: "Nunito Sans",
                      letterSpacing: 1,
                    }}
                  >
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid2>
        ))}
    </Grid2>
  );
};

export default CategoryGrid;
