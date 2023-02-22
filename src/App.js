import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { pokedata as data } from "./data";
import "./App.css";

const App = () => {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div className="container">
      <SearchBar data={data} setFilteredData={setFilteredData} />
      <div className="pokedex">
        {filteredData.map((pokemon) => (
          <div className="pokemon" key={pokemon.id}>
            <div>{pokemon.name}</div>
            <div>{pokemon.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
