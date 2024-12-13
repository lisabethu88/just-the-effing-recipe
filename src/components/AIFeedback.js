import React, { useEffect, useState } from "react";
import { Typography, CircularProgress, Box } from "@mui/material";
import BackButton from "./BackButton";
import axios from "axios";
import DisclaimerModal from "./DisclaimerModal";
import picnic_bg from "../assets/picnic-bg.jpg";
import DOMPurify from "dompurify";

const AIFeedback = ({ recipe, diet, setShowFeedback, setDiet }) => {
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  function processFeedback(feedback) {
    // Regex to match all Markdown-style code blocks like ```html ... ```
    const regex = /```html([\s\S]*?)```/g;

    // Remove all code blocks with the `html` marker
    feedback = feedback.replace(regex, (match, codeContent) => {
      return codeContent.trim(); // Keep the content within the block
    });

    // Sanitize the resulting HTML to ensure safety
    return DOMPurify.sanitize(feedback);
  }
  const sanitizedFeedback = processFeedback(feedback);

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
    const prompt = `Provide advice on how to modify the following recipe to suit a ${diet} diet:\n\nRecipe:\n${formatRecipe(
      recipe
    )}. Format the response as HTML for easy display on a webpage.`;

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
  }, [recipe, diet]);

  return (
    <Box sx={{ textAlign: "center" }}>
      <BackButton handleSubmit={handleSubmit} bgColor="white" />
      <Typography
        variant="h1"
        fontFamily='"Goudy Bookletter 1911", serif'
        fontSize={{ xs: "2rem", sm: "3rem" }}
        fontWeight={600}
        letterSpacing={1}
        color={"#314f37"}
        sx={{
          textWrap: "wrap",
        }}
        textAlign={"center"}
        margin={2}
      >
        {" "}
        Tips on making your meal {diet} friendly!
      </Typography>

      {/* Show error message */}
      {error && (
        <Typography variant="body1" color="error" sx={{ marginTop: 2 }}>
          {error}
        </Typography>
      )}
      {/* Show feedback only when available */}

      <Box
        sx={{
          boxShadow: 2,
          backgroundImage: `url(${picnic_bg})`,
          backgroundSize: "75px",
          backgroundPosition: "top left",
          backgroundRepeat: "repeat",
          padding: 3,
          width: "fit-content",
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "white",
            padding: 3,
            border: "3px solid #c7a47c",
          }}
        >
          {/* Show loading spinner */}
          {loading && (
            <Box>
              <Typography
                variant="h1"
                fontFamily='"Goudy Bookletter 1911", serif'
                fontSize={"2rem"}
                fontWeight={600}
                letterSpacing={1}
                color={"#ad1a00"}
                sx={{
                  textWrap: "wrap",
                }}
                textAlign={"center"}
              >
                Loading
              </Typography>
              <CircularProgress sx={{ color: "#314f37" }} />
            </Box>
          )}
          {feedback && !loading && (
            <Typography
              variant="body1"
              dangerouslySetInnerHTML={{ __html: sanitizedFeedback }}
            ></Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AIFeedback;
