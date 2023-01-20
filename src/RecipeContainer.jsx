import React from 'react'
import RecipeCard from './RecipeCard'

function RecipeContainer({data}) {

  const renderCards = data.map(recipe => (
    <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} ingredients={recipe.ingredients} instructions={recipe.instructions} servings={recipe.servings} cooktime={recipe.cooking_time} img={recipe.img}/>
  ))

  return (
    <div className='bg-gray-200 h-[calc(100vh-80px)] flex items-center'>
     <div className='w-11/12 h-[calc(100vh-80px)] mt-10 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {renderCards}
     </div>
    </div>
  )
}

export default RecipeContainer