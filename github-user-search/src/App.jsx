import React from "react";
import "./App.css";
import GitHubHome from "./components/gitHubHome";
import Search from "./components/Search";

function App() {
  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <GitHubHome />
      <Search />
    </div>
  );
}

export default App;
