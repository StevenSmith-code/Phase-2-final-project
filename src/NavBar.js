import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function NavBar() {
  const [search, setSearch] = useState("");
  const filterRequest = (e) => {
    setTimeout(() => {}, 1000);
  };

  return (
    <div className="h-20 bg-blue-500 flex items-center gap-x-20 px-20">
      <Link
        className="hover:h-full hover:bg-white hover:flex hover:items-center hover:bg-opacity-50 hover:px-5 hover:text-lg hover:transition hover:ease-in-out duration-150 cursor-pointer text-white hover:text-gray-800"
        to={"/"}
      >
        Home
      </Link>
      <Link
        className="hover:h-full hover:bg-white hover:flex hover:items-center hover:bg-opacity-50 hover:px-5 hover:text-lg transition hover:ease-in-out cursor-pointer text-white hover:text-gray-800"
        to={"/create"}
      >
        New Recipe
      </Link>
      <Link
        className="hover:h-full hover:bg-white hover:flex hover:items-center hover:bg-opacity-50 hover:px-5 hover:text-lg transition hover:ease-in-out cursor-pointer text-white hover:text-gray-800"
        to={"/manage"}
      >
        My Recipes
      </Link>
      <input
        value={search}
        type="text"
        placeholder="Search for recipe..."
        className="px-2 py-1 rounded-2xl focus:outline-none"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default NavBar;
