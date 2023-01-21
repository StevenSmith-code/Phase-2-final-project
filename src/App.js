import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import RecipeContainer from './RecipeContainer';
function App() {

  const [data, setData] = useState([])

  useEffect(() =>{
    fetch("http://localhost:3000/recipes")
    .then(res => res.json())
    .then(data => {
      data.sort(() => Math.random() - 0.5)
      setData([...data])
    })
  },[])

  return (
    <div className="App">
      <NavBar/>
      <RecipeContainer data={data}/>
     
    </div>
  );
}

export default App;
