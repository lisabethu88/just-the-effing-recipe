import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeGrid from "../components/RecipeGrid";
import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { Box } from "@mui/material";
import { subcategoriesEnum } from "../data/Constants";
import BackButton from "../components/BackButton";
import LoadingScreen from "../components/LoadingScreen";
import ErrorPage from "../components/ErrorPage";

const Recipes = () => {
  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  const { category, subcategory } = useParams();

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchQuickMeals = async () => {
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            apiKey: apiKey,
            maxReadyTime:
              subcategory === "ten-min"
                ? 10
                : subcategory === "twenty-min"
                ? 20
                : 30, // Maximum preparation time in minutes
            number: 10, // Number of recipes to return
            addRecipeInformation: true, // Include additional info like images and URLs
          },
        }
      );
      setMeals(response.data.results);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch quick meals. Please try again later.");
      setLoading(false);
    }
  };

  const fetchMealsByType = async (mealType) => {
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            apiKey: apiKey,
            type: subcategory, // Specify the meal type, e.g., 'breakfast', 'lunch', 'dinner'
            number: 10, // Number of recipes to return
            addRecipeInformation: true, // Include additional info like images and URLs
          },
        }
      );
      setMeals(response.data.results); // Update the meals state with fetched recipes
      setLoading(false); // Set loading to false
    } catch (err) {
      console.error(err);
      setError("Failed to fetch meals by type. Please try again later.");
      setLoading(false); // Set loading to false in case of error
    }
  };

  const fetchMealsByCuisine = async (cuisineType) => {
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            apiKey: apiKey,
            cuisine: subcategory, // Specify the cuisine type, e.g., 'Italian', 'Mexican', etc.
            number: 10, // Number of recipes to return
            addRecipeInformation: true, // Include additional info like images and URLs
          },
        }
      );
      setMeals(response.data.results); // Update the meals state with fetched recipes
      setLoading(false); // Set loading to false
    } catch (err) {
      console.error(err);
      setError("Failed to fetch meals by cuisine. Please try again later.");
      setLoading(false); // Set loading to false in case of error
    }
  };

  useEffect(() => {
    if (category === "quick") {
      fetchQuickMeals();
    } else if (category === "meal-type") {
      fetchMealsByType();
    } else {
      fetchMealsByCuisine();
    }
  }, []);

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorPage />;
  return (
    <Box component="main">
      <PageTitle title={subcategoriesEnum[subcategory]} image={"croissant"} />{" "}
      <BackButton /> <RecipeGrid data={meals} />
    </Box>
  );
};

export default Recipes;
