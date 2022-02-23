import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import RecipesList from "./components/RecipeList";

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const APP_ID = "110b7193";
  const APP_KEY = "8f93c85b567a0e52b1f567a7e91ea5be";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  
  async function getRecipes() {
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  } 

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
        <Header/>
        <RecipesList recipes={recipes} search={search} handleSearch={handleSearch} getSearch={getSearch}/>
    </div>
  );
}

export default App;
