import React from "react";
import useRecipeStore from "./recipeStore";

export default function RecommendationsList() {
  const recommendedRecipes = useRecipeStore((state) => state.recommendations());

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendedRecipes.length > 0 ? (
        recommendedRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
}
