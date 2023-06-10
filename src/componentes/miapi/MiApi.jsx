import React, { useEffect, useState } from "react";
import "./miapi.css";

const MiApi = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://naruto-api.fly.dev/api/v1/characters"
        );
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCharacters = characters
    .filter((character) =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <div className="search-container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Buscar personaje por nombre"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      {filteredCharacters.length === 0 ? (
        <h1 className="not-found-message">
          Personaje no encontrado en la lista
        </h1>
      ) : (
        <div className="tarjeta">
          {filteredCharacters.map((character) => (
            <div key={character.id}>
              <img src={character.images[0]} alt={character.name} />
              <div className="info-tarjeta">
                <h2>{character.name}</h2>
                <p>Afiliação: {character.info.Afiliação}</p>
                <p>Sexo: {character.info.Sexo}</p>
                <p>Aniversário: {character.info.Aniversário}</p>
                <p>Ocupação: {character.info.Ocupação}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MiApi;
