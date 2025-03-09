import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  const { searchTerm, setSearchTerm, filteredRecipes } = useRecipeStore(
    (state) => ({
      searchTerm: state.searchTerm,
      setSearchTerm: state.setSearchTerm,
      filteredRecipes: state.filteredRecipes(),
    })
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search recipes..."
      />
      <div>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
}
