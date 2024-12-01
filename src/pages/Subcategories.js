import React, { useState, useEffect } from "react";
import CategoryGrid from "../components/CategoryGrid";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import PageTitle from "../components/PageTitle";
import { categoriesEnum } from "../data/Constants";
import { cuisines, mealTypes, quickTypes } from "../data/Data";
import BackButton from "../components/BackButton";

const Subcategories = () => {
  const { category } = useParams();
  const [data, setData] = useState({});
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
        break;
    }
  }, [category]);

  return (
    <Box component="main">
      <PageTitle title={categoriesEnum[category]} image={"dutch-oven"} />
      <BackButton />
      <CategoryGrid data={data} />
    </Box>
  );
};

export default Subcategories;
