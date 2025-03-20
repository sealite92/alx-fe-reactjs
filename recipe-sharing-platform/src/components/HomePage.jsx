import { useEffect, useState } from "react";
import data from "./data.json";

export default function HomePage() {
  const [recipe, setRecipe] = useState(data);

  return (
    <>
      <div>
        {data.map((recipe) => {
          <div style={{ backgroundImage: `url(${recipe.image})` }}>
            <h1>{recipe.title}</h1>
            <p>{recipe.summary}</p>
          </div>;
        })}
      </div>
    </>
  );
}
