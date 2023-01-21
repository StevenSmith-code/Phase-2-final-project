import React from 'react'
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className='h-20 bg-blue-500 flex items-center gap-x-20 px-20'>
        <Link className='hover:h-full hover:bg-white hover:flex hover:items-center hover:bg-opacity-50 hover:px-5 hover:text-lg hover:transition hover:ease-in-out duration-150 cursor-pointer text-white hover:text-gray-800' to={"/"}>Home</Link>
        <Link className='hover:h-full hover:bg-white hover:flex hover:items-center hover:bg-opacity-50 hover:px-5 hover:text-lg transition hover:ease-in-out cursor-pointer text-white hover:text-gray-800' to={"/create"}>New Recipe</Link>
        <Link className='hover:h-full hover:bg-white hover:flex hover:items-center hover:bg-opacity-50 hover:px-5 hover:text-lg transition hover:ease-in-out cursor-pointer text-white hover:text-gray-800' to={"/manage"}>My Recipes</Link>
    </div>
  )
}

export default NavBar