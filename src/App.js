import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import RecipeContainer from "./RecipeContainer";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => {
        data.sort(() => Math.random() - 0.5);
        setRecipes([...data]);
      });
  }, []);

  const filteredRecipes =
    search.length > 1
      ? recipes.filter((recipe) =>
          recipe?.title.toLowerCase().includes(search.toLowerCase())
        )
      : recipes;

  return (
    <div className="App">
      <NavBar search={search} setSearch={setSearch} />
      <RecipeContainer data={filteredRecipes} />
    </div>
  );
}

export default App;
