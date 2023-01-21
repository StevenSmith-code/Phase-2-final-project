import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./NavBar";
import DetailedRecipe from "./DetailedRecipe";
import SavedRecipes from "./SavedRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "recipes/:id",
    element: (
      <>
        <NavBar />
        <DetailedRecipe />
      </>
    ),
    loader: async ({ params }) => {
      return fetch(`http://localhost:3000/recipes/${params.id}`);
    },
  },
  {
    path: "manage",
    element: (
      <>
        <NavBar />
        <SavedRecipes />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
