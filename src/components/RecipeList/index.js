import React from 'react';
import Recipe from "./Recipe";
import Form from '../Form';
import './styles.scss';

export default function RecipesList({recipes, search, handleSearch, getSearch}) {
  return (
    <section className="recipe-list">
      <Form search={search} handleSearch={handleSearch} getSearch={getSearch}/>
      <div className="recipe-wrapper">
      {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.url} 
          title={recipe.recipe.label}
          source={recipe.recipe.source}
          image={recipe.recipe.image}
          link={recipe.recipe.url}
          />
        ))}
      </div>
    </section>
  )
}
