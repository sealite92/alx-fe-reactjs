import HomePage from "./components/HomePage";
import data from "./data.json";
import "./index.css";

function App() {
  return (
    <>
      <div className="bg-red-800">
        {data.map((recipe) => (
          <HomePage
            key={recipe.id}
            title={recipe.title}
            summary={recipe.summary}
            image={recipe.image}
          />
        ))}
      </div>
    </>
  );
}

export default App;
