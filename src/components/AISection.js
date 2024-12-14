import {
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { dietOptions } from "../data/Data";
import AIFeedback from "./AIFeedback";
import DisclaimerModal from "./DisclaimerModal";

const AISection = ({ recipe }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [diet, setDiet] = useState("");
  const [open, setOpen] = useState(false); // Track dropdown state

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowFeedback(true);
    console.log("Form submitted");
  };
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#e0ddd5",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: 5,
        gap: 2,
      }}
    >
      {!showFeedback && (
        <>
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
          >
            Customize this Recipe with OpenAI
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600 }}>
            Select your diet below, and OpenAI will provide tailored tips to
            adjust this recipe just for you. Get suggestions on ingredient
            swaps, portion adjustments, and more to match your dietary needs!
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <FormControl fullWidth>
              <InputLabel
                id="diet-select-label"
                sx={{
                  fontFamily: "Nunito Sans",
                }}
              >
                Select Diet
              </InputLabel>
              <Select
                labelId="diet-select-label"
                id="diet-select"
                value={diet}
                label="Select Diet"
                onChange={(event) => setDiet(event.target.value)}
                sx={{
                  width: 300,
                  backgroundColor: "white",
                  fontFamily: "Nunito Sans",
                }}
              >
                {dietOptions.map((dietOption) => (
                  <MenuItem
                    key={dietOption.id}
                    value={dietOption.label}
                    sx={{
                      "& input": { fontFamily: "Nunito Sans" },
                      "& .MuiInputLabel-root": {
                        fontFamily: "Nunito Sans",
                      },
                    }}
                  >
                    {dietOption.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#ad1a00",
                color: "white",
                fontWeight: 800,
                letterSpacing: 1,
                fontFamily: "Nunito Sans",
                borderRadius: 0,
              }}
              disabled={!diet}
            >
              Submit
            </Button>
          </Box>
        </>
      )}
      {showFeedback && (
        <AIFeedback
          recipe={recipe}
          diet={diet}
          setShowFeedback={setShowFeedback}
          setDiet={setDiet}
        />
      )}

      <Divider orientation="horizontal" sx={{ width: "100%", maxWidth: 500 }} />

      <DisclaimerModal />
    </Box>
  );
};

export default AISection;
