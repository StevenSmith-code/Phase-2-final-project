import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import RecipeContainer from "./RecipeContainer";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => {
        data.sort(() => Math.random() - 0.5);
        setData([...data]);
      });
  }, []);

  useEffect(() => {
    if (search.length > 1) {
      const filtered = data.filter((recipe) =>
        recipe?.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [data, search]);
  return (
    <div className="App">
      <NavBar search={search} setSearch={setSearch} />
      <RecipeContainer data={filteredData} />
    </div>
  );
}

export default App;
