import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddRecipe from "./AddRecipe";
import "./App.css";
import DetailedRecipe from "./DetailedRecipe";
import NavBar from "./NavBar";
import RecipeContainer from "./RecipeContainer";
import SavedRecipes from "./SavedRecipes";

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
      <Routes>
        <Route
          path="/"
          element={<RecipeContainer recipes={filteredRecipes} />}
        />
        <Route
          path="recipes/:recipeId"
          element={<DetailedRecipe recipes={recipes} />}
        />
        <Route path="manage" element={<SavedRecipes />} />
        <Route path="create" element={<AddRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
