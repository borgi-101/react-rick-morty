import React, { useState, useEffect } from "react";
import "../styles/Characters.scss";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error(error, "fetch api"));
  });

  return (
    <div className="Characters">
      {characters.map((character) => {
        return (
          <div className="Character" key={character.id}>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })}
    </div>
  );
};
export default Characters;
