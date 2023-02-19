import React, { useReducer } from "react";
import { useEffect } from "react";

const initialState = {
  id: 0,
  title: "",
  servings: "",
  ingredients: "",
  instructions: "",
  cooking_time: "",
  img: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateId":
      return { ...state, id: action.payload };
    case "updateRecipeName":
      return { ...state, title: action.payload };
    case "updateServings":
      return { ...state, servings: action.payload };
    case "updateIngredients":
      return { ...state, ingredients: action.payload };
    case "updateInstructions":
      return { ...state, instructions: action.payload };
    case "updateImage":
      return { ...state, img: URL.createObjectURL(action.payload) };
    case "updateCookingTime":
      return { ...state, cooking_time: action.payload };
    default:
      return state;
  }
};

function AddRecipe() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const recipes = [];
  const handleFileInput = (event) => {
    const file = event.target.files[0];
    dispatch({ type: "updateImage", payload: file });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "id", payload: recipes[0]?.length + 1 });
    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => {
        recipes.push(data);
      });
  }, []);
  return (
    <form class="w-full max-w-lg m-auto mt-40" onSubmit={handleSubmit}>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-recipe-name"
          >
            Recipe Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-recipe-name"
            type="text"
            placeholder="Mac and Cheese"
            value={state.recipeName}
            onChange={(e) =>
              dispatch({ type: "updateRecipeName", payload: e.target.value })
            }
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-servings-name"
          >
            servings
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-servings-name"
            type="number"
            placeholder="4"
            pattern="[0-9]{1,8}"
            maxLength={8}
            value={state.servings}
            onChange={(e) =>
              dispatch({ type: "updateServings", payload: e.target.value })
            }
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-ingredients"
          >
            ingredients
          </label>
          <textarea
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-ingredients"
            type="text"
            value={state.ingredients}
            onChange={(e) =>
              dispatch({ type: "updateIngredients", payload: e.target.value })
            }
            maxLength={500}
          />
          <p class="text-gray-600 text-xs italic">
            Make sure to seperate by pressing the enter key
          </p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-3/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-instructions"
          >
            instructions
          </label>
          <div class="relative">
            <textarea
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-instructions"
              value={state.instructions}
              onChange={(e) =>
                dispatch({
                  type: "updateInstructions",
                  payload: e.target.value,
                })
              }
            ></textarea>
            <p class="text-gray-600 text-xs italic">up to 500 characters</p>
          </div>
        </div>
        <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-img"
          >
            image
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-img"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleFileInput}
          />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-cook-time"
          >
            cook time
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-cook-time"
            type="number"
            placeholder="25"
            maxLength={500}
            value={state.cooking_time}
            onChange={(e) =>
              dispatch({ type: "updateCookingTime", payload: e.target.value })
            }
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
