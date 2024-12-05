import "./App.css";
import Home from "./pages/Home";
import NavigationHeader from "./components/NavigationHeader";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Subcategories from "./pages/Subcategories";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <NavigationHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<Subcategories />} />
        <Route
          path="/categories/:category/:subcategory"
          element={<Recipes />}
        />
        <Route
          path="/categories/:category/:subcategory/:recipeId"
          element={<Recipe />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
