import React, { useState } from "react";
import { useNavigate } from "react-router";

function RecipeCard({
  id,
  img,
  title,
  servings,
  cooktime,
  onDelete,
  isSaved,
  setMessage,
}) {
  const history = useNavigate();

  const handleClick = () => {
    history(`/recipes/${id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    fetch(`http://localhost:3000/savedrecipes/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        setMessage("Recipe deleted successfully!");
        onDelete(id);
        setTimeout(() => setMessage(""), 3000);
      })
      .then((data) => console.log(data));
  };
  return (
    <div
      onClick={handleClick}
      className={`bg-gray-200 h-80 w-80 items-center rounded-lg cursor-pointer hover:scale-110 transition duration-100 shadow-lg flex flex-col items-center`}
    >
      <img className="h-52 w-full p-2" src={img} alt="" />
      <h1 className="text-sm sm:text-base xl:text-xl">{title}</h1>
      <div className="flex justify-around w-full mt-10">
        <p>Servings: {servings}</p>
        <p>Cook Time: {cooktime} minutes</p>
        {isSaved ? (
          <button
            onClick={handleDelete}
            className="outline outline-red-500 text-red-500 px-2"
          >
            X
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default RecipeCard;
