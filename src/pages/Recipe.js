import React, { useState, useEffect } from "react";
import { Box, Divider, Grid2, Typography } from "@mui/material";
import BackButton from "../components/BackButton";
import { useLocation, useParams } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import picnic_bg from "../assets/picnic-bg.jpg";
import AISection from "../components/AISection";
import LoadingScreen from "../components/LoadingScreen";
const Recipe = () => {
  const location = useLocation();
  const { meal } = location.state || {};
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch recipe details");
        }
        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [recipeId]);

  if (!meal || error) {
    return <ErrorPage />;
  }

  if (loading) return <LoadingScreen />;
  return (
    <Box component="main">
      <BackButton />{" "}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          margin: 3,
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor: "#e0ddd5",
          padding: 3,
          boxShadow: 2,
        }}
      >
        <Box
          component="img"
          src={meal.image}
          sx={{
            maxWidth: "250px",
            backgroundColor: "#e0ddd5",
            boxShadow: 2,
            padding: 1,
            backgroundImage: `url(${picnic_bg})`,
            backgroundSize: "75px",
            backgroundPosition: "top left",
            backgroundRepeat: "repeat",
          }}
        ></Box>
        <Typography
          variant="h1"
          fontFamily='"Goudy Bookletter 1911", serif'
          fontSize={{ xs: "2rem", sm: "3rem" }}
          fontWeight={800}
          color={"#d4452c"}
          textAlign={"center"}
          letterSpacing={1}
          sx={{
            textWrap: "pretty",
            maxWidth: 500,
          }}
        >
          {meal.title}
        </Typography>
      </Box>
      <Divider sx={{ color: "#d4452c", width: "75%" }} />
      <Grid2 container spacing={2} sx={{ margin: 2 }}>
        <Grid2 item xs={12} md={6} sx={{ padding: 2, maxWidth: 500 }}>
          <Typography
            variant="h1"
            fontFamily='"Goudy Bookletter 1911", serif'
            fontSize={{ xs: "2rem", sm: "2rem" }}
            fontWeight={800}
            color={"#314f37"}
            textAlign={"left"}
            letterSpacing={1}
            marginBottom={1}
            sx={{
              textWrap: "pretty",
            }}
          >
            Ingredients
          </Typography>
          <ul>
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        </Grid2>
        <Grid2 item xs={12} md={6} sx={{ padding: 2, maxWidth: 500 }}>
          <Typography
            variant="h1"
            fontFamily='"Goudy Bookletter 1911", serif'
            fontSize={{ xs: "2rem", sm: "2rem" }}
            fontWeight={800}
            color={"#314f37"}
            textAlign={"left"}
            letterSpacing={1}
            marginBottom={1}
            sx={{
              textWrap: "pretty",
            }}
          >
            Instructions
          </Typography>
          <Typography sx={{ maxWidth: 300 }}>
            {recipe.analyzedInstructions.length > 0 ? (
              recipe.analyzedInstructions[0].steps.map((step) => (
                <Typography key={step.number}>
                  <Typography variant={"span"} fontWeight={800} color="#d4452c">
                    {step.number}.
                  </Typography>{" "}
                  {step.step}
                </Typography>
              ))
            ) : (
              <p>No instructions available.</p>
            )}
          </Typography>
        </Grid2>
      </Grid2>
      <AISection recipe={recipe} />
    </Box>
  );
};

export default Recipe;
