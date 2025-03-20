import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe data from JSON
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.recipes.find(
          (recipe) => recipe.id === parseInt(id)
        );
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center mt-10 text-lg text-gray-500">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <p className="text-gray-700 mb-6">{recipe.description}</p>

      <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">
            {ingredient}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
      <ol className="list-decimal list-inside space-y-2">
        {recipe.instructions.map((step, index) => (
          <li key={index} className="text-gray-700">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
