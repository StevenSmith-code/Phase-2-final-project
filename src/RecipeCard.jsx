import React from 'react'

function RecipeCard({id, img, title, ingredients, instructions, servings, cooktime}) {
  return (
    <div className='bg-gray-400 h-80 w-80 rounded-lg cursor-pointer hover:scale-110 transition duration-100 shadow-lg flex flex-col items-center'>
        <img className='h-52 w-full p-2' src={img} alt="" />
        <h1 className='text-sm sm:text-base xl:text-xl'>{title}</h1>
        <div className='flex justify-around w-full mt-10'>
            <p>Servings: {servings}</p>
            <p>Cook Time: {cooktime}</p>
        </div>
    </div>
  )
}

export default RecipeCard