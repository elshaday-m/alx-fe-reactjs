import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import { useRecipeStore } from "./recipeStore";

function HomePage() {
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  React.useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "2rem" }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
