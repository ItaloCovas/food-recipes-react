import React from 'react'
import './styles.scss';

export default function Form({search, handleSearch, getSearch}) {
  return (
    <form className="search-form" onSubmit={getSearch}>
      <input className="search-bar" type="text" value={search} onChange={handleSearch}/>
      <button className="search-button" type="submit">Search</button>
    </form>
  )
}
