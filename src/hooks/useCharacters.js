import { useState } from "react";
import axios from "axios";
import { API_URL_CHARACTERS } from "../Config/api";

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [detailCharacters, setDetailCharacters] = useState({});

  const onClose = (idParam) => {
    const filteredCharacters = characters.filter(
      (character) => parseInt(character.id) !== parseInt(idParam)
    );
    setCharacters(filteredCharacters);
  };

  const onSearch = async (id) => {
    // eslint-disable-next-line
    if (!!characters.find((character) => character.id == id))
      return window.alert("Ese ID ya esta agregado");
    try {
      const result = await axios(`${API_URL_CHARACTERS}${id}`);

      if (result.data.name) {
        setCharacters([...characters, result.data]);
      } else {
        window.alert("No existe un personaje con ese ID");
      }
    } catch (error) {
      console.log(error);
      window.alert("No existe un personaje con ese ID ERROR");
    }
  };

  const detailCharacter = async (id) => {
    try {
      const result = await axios(`${API_URL_CHARACTERS}${id}`);

      if (result.data.name) {
        // Mover esta línea antes de setDetailCharacters
        setDetailCharacters(result.data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    } catch (error) {
      console.log(error);
      window.alert("No existe un personaje con ese ID ERROR");
    }
  };

  return {
    onSearch,
    onClose,
    detailCharacter,
    characters,
    detailCharacters,
    setDetailCharacters,
  };
};

export default useCharacters;
