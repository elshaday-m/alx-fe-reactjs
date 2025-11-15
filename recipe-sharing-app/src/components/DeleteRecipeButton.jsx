import { useRecipeStore } from "../store/recipeStore";

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
      if (onDeleted) onDeleted();
    }
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: "10px" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
