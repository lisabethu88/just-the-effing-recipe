import React, { useEffect, useState } from "react";
import { Typography, CircularProgress, Box } from "@mui/material";
import BackButton from "./BackButton";
import axios from "axios";
import DisclaimerModal from "./DisclaimerModal";

const AIFeedback = ({ recipe, diet, setShowFeedback, setDiet }) => {
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    setShowFeedback(false);
    setDiet("");
  };

  const fetchRecipeAdvice = async (recipe, diet) => {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    const endpoint = "https://api.openai.com/v1/chat/completions";
    const formatRecipe = (recipe) => {
      return `
Title: ${recipe.title}
Description: ${recipe.summary}
Servings: ${recipe.servings}
Ready in Minutes: ${recipe.readyInMinutes}
Vegetarian: ${recipe.vegetarian}
Vegan: ${recipe.vegan}
Gluten-Free: ${recipe.glutenFree}
Dairy-Free: ${recipe.dairyFree}

Ingredients:
${recipe.extendedIngredients.map((ing) => `- ${ing.name}`).join("\n")}

Instructions:
${recipe.instructions}

Source: ${recipe.sourceName} (${recipe.sourceUrl})
    `;
    };
    const prompt = `Provide advice on how to modify the following recipe so that it suits a ${diet} diet:\n\nRecipe:\n${formatRecipe(
      recipe
    )}`;

    try {
      const response = await axios.post(
        endpoint,
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful recipe assistant." },
            { role: "user", content: prompt },
          ],
          max_tokens: 500,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error(
        "Error fetching recipe advice:",
        error.response?.data || error
      );
      throw new Error("Failed to fetch recipe advice. Please try again.");
    }
  };

  useEffect(() => {
    const handleFetch = async () => {
      console.log("fetching....");
      setLoading(true); // Set loading before starting fetch
      setError(null); // Reset error state
      try {
        const advice = await fetchRecipeAdvice(recipe, diet);
        setFeedback(advice); // Set the advice
      } catch (err) {
        setError("Unable to fetch advice. Please try again later.");
      } finally {
        setLoading(false); // Always end loading state
      }
    };

    handleFetch();
    console.log("recipe", recipe, "diet", diet);
  }, [recipe, diet]); // Add dependencies

  return (
    <Box sx={{ textAlign: "center" }}>
      <BackButton handleSubmit={handleSubmit} bgColor="white" />
      <Typography
        variant="h1"
        fontFamily='"Goudy Bookletter 1911", serif'
        fontSize={{ xs: "2rem", sm: "3rem" }}
        fontWeight={600}
        letterSpacing={1}
        color={"#d4452c"}
        sx={{
          textWrap: "wrap",
        }}
        textAlign={"center"}
      >
        {" "}
        Tips on making your meal {diet} friendly!
      </Typography>
      {/* Show loading spinner */}
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 2,
            color: "#d4452c",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {/* Show error message */}
      {error && (
        <Typography variant="body1" color="error" sx={{ marginTop: 2 }}>
          {error}
        </Typography>
      )}
      {/* Show feedback only when available */}
      {feedback && (
        <Typography variant="body1" sx={{ margin: "20px auto", maxWidth: 800 }}>
          {feedback}
        </Typography>
      )}
      <DisclaimerModal />
    </Box>
  );
};

export default AIFeedback;
