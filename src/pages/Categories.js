import React from "react";
import { Box } from "@mui/material";
import { categories } from "../data/Data";
import PageTitle from "../components/PageTitle";
import CategoryGrid from "../components/CategoryGrid";
import BackButton from "../components/BackButton";

const Categories = () => {
  return (
    <Box
      component="main"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <PageTitle title={"Categories"} image={"duck"} />
      <BackButton />
      <CategoryGrid data={categories} />
    </Box>
  );
};

export default Categories;
