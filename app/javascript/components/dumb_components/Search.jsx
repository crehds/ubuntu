import React from 'react';
import '../style/search.css';

function Search() {
  return (
    <form
      className="Search"
    >
      <input
        type="text"
        placeholder="Buscar documento"
        className="Search-input"
        name="search"
      />
    </form>
  );
}

export default Search;
