import { useEffect, useState } from 'react';
import './App.css';
import recipes from "./db.json"
import NavBar from './NavBar';
import RecipeContainer from './RecipeContainer';
function App() {

  const [data, setData] = useState([])

  useEffect(() =>{
    setData([...data, ...recipes])
  },[])
  


  return (
    <div className="App">
      <NavBar/>
      <RecipeContainer/>
     {/* {data.map(recipe => (
      <li key={recipe.id}>{recipe.title}</li>
     ))} */}
    </div>
  );
}

export default App;
