import React from 'react'
import './styles.scss';

export default function Recipe({title, source, image, link}) {
  return (
      <div className="recipe-card">
      <img src={image} alt="Recipe" />
      <div className="recipe-card-content"> 
      <h3>{title}</h3>
      <p>Source: {source}</p>
      <a href={link} target="_blank">View Recipe</a>
      </div>
    </div>
  )
}
