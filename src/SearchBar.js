import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ data, setFilteredData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
    const filteredData = data.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredData(filteredData);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
