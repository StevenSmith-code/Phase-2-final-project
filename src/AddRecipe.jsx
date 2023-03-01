import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipe({ recipes, setRecipes }) {
  const [userRecipe, setUserRecipe] = useState({
    id: 0,
    title: "",
    servings: "",
    ingredients: "",
    instructions: "",
    cooking_time: "",
    img: null,
  });
  const navigate = useNavigate();
  const handleFileInput = (event) => {
    const file = event.target.files[0];
    setUserRecipe((prevState) => ({
      ...prevState,
      img: URL.createObjectURL(file),
    }));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserRecipe((prevState) => ({
      ...prevState,
      id: recipes[0]?.length + 1,
    }));
    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        setRecipes([...recipes, data]);
        navigate("/");
      });
  };

  return (
    <form className="w-full max-w-lg m-auto mt-40" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-recipe-name"
          >
            Recipe Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-recipe-name"
            type="text"
            placeholder="Mac and Cheese"
            value={userRecipe.title}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-servings-name"
          >
            servings
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-servings-name"
            type="number"
            placeholder="4"
            pattern="[0-9]{1,8}"
            maxLength={8}
            name="servings"
            value={userRecipe.servings}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-ingredients"
          >
            ingredients
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-ingredients"
            type="text"
            name="ingredients"
            value={userRecipe.ingredients}
            onChange={handleChange}
            maxLength={500}
          />
          <p className="text-gray-600 text-xs italic">
            Make sure to seperate by pressing the enter key
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-instructions"
          >
            instructions
          </label>
          <div className="relative">
            <textarea
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-instructions"
              name="instructions"
              value={userRecipe.instructions}
              onChange={handleChange}
            ></textarea>
            <p className="text-gray-600 text-xs italic">up to 500 characters</p>
          </div>
        </div>
        <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-img"
          >
            image
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-img"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleFileInput}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-cook-time"
          >
            cook time
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-cook-time"
            type="number"
            placeholder="25"
            maxLength={500}
            name="cooking_time"
            value={userRecipe.cooking_time}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="outline outline-1 hover:outline-2 hover:drop-shadow-lg hover:scale-110 px-2 w-1/5 mt-5 ml-56"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddRecipe;
