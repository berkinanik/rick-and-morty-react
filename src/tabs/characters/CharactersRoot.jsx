import { useState, useEffect } from 'react';
import CharactersList from './CharactersList';

function CharactersRoot() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/?page=1`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data.error;
        }
        const { results } = data;
        setCharacters(results);
      })
      .catch((err) => {
        console.log(err);
        if (err.toLowerCase().includes('nothing')) {
          setCharacters([]);
        }
      });
  }, []);

  return <CharactersList charactersData={characters} />;
}

export default CharactersRoot;
