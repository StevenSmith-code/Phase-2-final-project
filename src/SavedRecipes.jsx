import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import RecipeCard from "./RecipeCard";

function SavedRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/savedrecipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes([data]);
      });
  }, []);
  const removeDeletedRecipe = (id) => {
    const updatedRecipes = recipes[0].filter((recipe) => recipe.id !== id);
    setRecipes([updatedRecipes]);
  };
  const renderSavedRecipes = recipes[0]?.map((recipe) => (
    <RecipeCard
      key={recipe.id}
      id={recipe.id}
      title={recipe.title}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
      servings={recipe.servings}
      cooktime={recipe.cooking_time}
      img={recipe.img}
      onDelete={removeDeletedRecipe}
      isSaved={true}
      setMessage={setMessage}
    />
  ));

  return (
    <div className="h-[calc(100vh-80px)] flex items-center">
      <div className="w-11/12 h-[calc(100vh-80px)] mt-10 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes[0]?.length > 0 ? (
          renderSavedRecipes
        ) : (
          <h1 className="text-xl text-center">
            Add some recipes to your cookbook!
          </h1>
        )}
        {message}
      </div>
    </div>
  );
}

export default SavedRecipes;
