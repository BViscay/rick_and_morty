import { useState } from "react";
import axios from "axios";

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  const onClose = (idParam) => {
    const filteredCharacters = characters.filter(
      (character) => parseInt(character.id) !== parseInt(idParam)
    );
    setCharacters(filteredCharacters);
  };

  const onSearch = (id) => {
    // eslint-disable-next-line
    if (!!characters.find((character) => character.id == id))
      return window.alert("Ese ID ya esta agregado");
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  return { onSearch, onClose, characters };
};

export default useCharacters;
