import { useMemo } from "react";
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favoriteIds = useRecipeStore((state) => state.favorites);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const favorites = useMemo(
    () =>
      favoriteIds.map((id) => recipes.find((r) => r.id === id)).filter(Boolean),
    [favoriteIds, recipes]
  );

  if (favorites.length === 0) return <p>No favorite recipes yet.</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "10px" }}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
