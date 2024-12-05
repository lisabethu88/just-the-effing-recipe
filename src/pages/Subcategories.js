import React, { useState, useEffect } from "react";
import CategoryGrid from "../components/CategoryGrid";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import PageTitle from "../components/PageTitle";
import { categoriesEnum } from "../data/Constants";
import { cuisines, mealTypes, quickTypes } from "../data/Data";
import BackButton from "../components/BackButton";
import ErrorPage from "../components/ErrorPage";

const Subcategories = () => {
  const { category } = useParams();
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  console.log("category", category);
  useEffect(() => {
    switch (category) {
      case "meal-type":
        setData(mealTypes);
        break;
      case "quick":
        setData(quickTypes);
        break;
      case "cuisine":
        setData(cuisines);
        break;
      default:
        setError(true);
        break;
    }
  }, [category]);

  if (error) {
    return <ErrorPage />;
  }
  return (
    <Box component="main">
      <PageTitle title={categoriesEnum[category]} image={"dutch-oven"} />
      <BackButton />
      <CategoryGrid data={data} />
    </Box>
  );
};

export default Subcategories;
