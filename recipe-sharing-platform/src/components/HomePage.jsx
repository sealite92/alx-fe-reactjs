import { useEffect, useState } from "react";
import data from "./data.json";

export default function HomePage() {
  const [recipe, setRecipe] = useState(data);

  return (
    <>
      <div className="rounded-md shadow-sm bg-green-200 hover:bg-green-400">
        {data.map((recipe) => {
          <div style={{ backgroundImage: `url(${recipe.image})` }}>
            <h1 className="text-4xl">{recipe.title}</h1>
            <p>{recipe.summary}</p>
          </div>;
        })}
      </div>
    </>
  );
}
