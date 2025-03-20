import { useState } from "react";

function AddRecipeForm() {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  // Validate form fields
  const validateForm = () => {
    let validationErrors = {};

    if (!recipe.title.trim()) {
      validationErrors.title = "Recipe title is required.";
    }
    if (!recipe.ingredients.trim()) {
      validationErrors.ingredients = "At least two ingredients are required.";
    } else if (recipe.ingredients.split("\n").length < 2) {
      validationErrors.ingredients = "Enter at least two ingredients.";
    }
    if (!recipe.steps.trim()) {
      validationErrors.steps = "Preparation steps are required.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("New Recipe Submitted:", recipe);
      alert("Recipe submitted successfully!");
      setRecipe({ title: "", ingredients: "", steps: "" }); // Reset form
      setErrors({});
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg md:max-w-screen-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Ingredients
          </label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ingredients, one per line"
            rows="4"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Preparation Steps
          </label>
          <textarea
            name="steps"
            value={recipe.steps}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe preparation steps"
            rows="4"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
