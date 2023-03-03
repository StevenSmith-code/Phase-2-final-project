import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function DetailedRecipe({ recipes }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { recipeId } = useParams();
  const [detailedRecipe, setDetailedRecipe] = useState({});

  useEffect(() => {
    const filteredRecipe = recipes.find(
      (recipe) => recipe.id === parseInt(recipeId)
    );
    setDetailedRecipe(filteredRecipe);
  }, [detailedRecipe]);
  const addToFavorites = () => {
    if (!isAdded) {
      fetch(`http://localhost:3000/savedrecipes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(detailedRecipe),
      })
        .then((res) => res.json())
        .then(() => {
          setIsAdded(!isAdded);
          setIsSaved(!isSaved);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/savedrecipes")
      .then((res) => res.json())
      .then((data) => {
        const alreadySaved = data.some(
          (recipe) => recipe.id === parseInt(recipeId)
        );
        setIsSaved(alreadySaved);
      });
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] w-screen flex overflow-hidden">
      <div className="w-1/3 m-auto flex flex-col items-center mt-10 space-y-5">
        <h1 className="text-3xl">{detailedRecipe?.title}</h1>
        <img
          className="h-64"
          src={detailedRecipe?.img}
          alt={`${detailedRecipe?.title}`}
        />
        <div className="flex justify-around w-full">
          <p>Servings: {detailedRecipe?.servings}</p>
          <p>Cook time: {detailedRecipe?.cooking_time} minutes.</p>
        </div>
      </div>
      <div className="w-3/6 h-full m-auto flex flex-col items-center mt-10">
        <div className="bg-blue-200 h-4/5 w-full rounded-xl flex flex-col items-center">
          <h1 className="mt-5 text-2xl mb-3">Ingredients:</h1>
          <pre>{detailedRecipe?.ingredients}</pre>
          <h1 className="mt-5 mb-3 text-2xl">Recipe:</h1>
          <pre>{detailedRecipe?.instructions}</pre>
          {!isSaved && (
            <button
              onClick={addToFavorites}
              className="outline outline-offset-2 outline-1 p-1 hover:outline-2 mt-5"
            >
              Save this recipe
            </button>
          )}
          {isAdded && (
            <span className="mt-5 text-green-600 text-lg">
              {detailedRecipe?.title} has been saved to your cookbook!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailedRecipe;
