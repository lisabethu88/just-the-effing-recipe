import { Box, Button, Typography } from "@mui/material";
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
            color={"#ad1a00"}
            sx={{
              textWrap: "wrap",
            }}
            textAlign={"center"}
          >
            Customize this Recipe with OpenAI
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600 }}>
            Customize this Recipe with OpenAI Select your diet below, and OpenAI
            will provide tailored tips to adjust this recipe just for you. Get
            suggestions on ingredient swaps, portion adjustments, and more to
            match your dietary needs!
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
            <Autocomplete
              open={open}
              openOnFocus
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
              disablePortal
              options={dietOptions}
              sx={{
                width: 300,
                backgroundColor: "white",
                fontFamily: "Nunito Sans",
              }}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Diet"
                  sx={{
                    "& input": { fontFamily: "Nunito Sans" },
                    "& .MuiInputLabel-root": {
                      fontFamily: "Nunito Sans",
                    },
                  }}
                  onKeyDown={(e) => {
                    if (e.key === " ") {
                      if (!open) {
                        e.preventDefault();
                        setOpen(true);
                      }
                    }
                  }}
                />
              )}
              onChange={(event, newValue) =>
                setDiet(newValue ? newValue.label : "")
              }
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#ad1a00",
                color: "#e0ddd5",
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

      <DisclaimerModal />
    </Box>
  );
};

export default AISection;
