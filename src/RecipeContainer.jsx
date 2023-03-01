import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

function RecipeContainer({ recipes }) {
  const [renderCards, setRenderCards] = useState([]);

  useEffect(() => {
    const cards = recipes?.map((recipe) => (
      <RecipeCard
        key={recipe.id}
        id={recipe.id}
        title={recipe.title}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
        servings={recipe.servings}
        cooktime={recipe.cooking_time}
        img={recipe.img}
      />
    ));
    setRenderCards(cards);
  }, [recipes]);

  return (
    <div className="h-[calc(100vh-80px)] flex items-center">
      <div className="w-11/12 h-[calc(100vh-80px)] mt-10 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderCards.length > 0 ? renderCards : "loading..."}
      </div>
    </div>
  );
}

export default RecipeContainer;
