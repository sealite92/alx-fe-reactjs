import { useEffect, useState } from "react";
import data from "./data.json";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipe, setRecipe] = useState(data);

  return (
    <>
      <div className="rounded-md shadow-sm bg-green-200 hover:bg-green-400 w-7/12 md:w-3/12 sm:grid grid-cols-2 md:grid-cols-3 sm:grid-cols-1">
        {data.map((recipe) => {
          <>
            <Link
              to={`/recipe/${recipe.id}`}
              key={recipe.id}
              className="block bg-white shadow-md rounded-lg overflow-hidden"
            ></Link>
            <div style={{ backgroundImage: `url(${recipe.image})` }}>
              <h1 className="text-4xl">{recipe.title}</h1>
              <p>{recipe.summary}</p>

              <Link
                to="/add-recipe"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
              >
                + Add New Recipe
              </Link>
            </div>
          </>;
        })}
      </div>
    </>
  );
}
