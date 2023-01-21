import React from 'react'
import { useLoaderData } from 'react-router-dom'

function DetailedRecipe() {
  const {id, title, img, ingredients, instructions, servings, cooking_time} = useLoaderData()

  return (
    <div className='h-[calc(100vh-80px)] w-screen flex overflow-hidden'>
      <div className='w-1/3 m-auto flex flex-col items-center mt-10 space-y-5'>
      <h1 className='text-3xl'>{title}</h1>
      <img className='h-64' src={img} alt={`${title}`} />
      <div className='flex justify-around w-full'>
        <p>Servings: {servings}</p>
        <p>Cook time: {cooking_time} minutes.</p>
      </div>
      </div>
      <div className='w-3/6 h-full m-auto flex flex-col items-center mt-10'>
        <div className='bg-blue-200 h-3/5 w-full rounded-xl flex flex-col items-center'>
          <h1 className='mt-5 text-2xl mb-3'>Ingredients:</h1>
          {ingredients.map(ingredient => (
            <li key={ingredient}>{ingredient}</li>
          ))}
          <h1 className='mt-5 mb-3 text-2xl'>Recipe:</h1>
          <pre>{instructions}</pre>
          <button className='outline outline-offset-2 outline-1 p-1 hover:outline-2 '>Save this recipe</button>
        </div>
      </div>
    </div>
  )
}

export default DetailedRecipe