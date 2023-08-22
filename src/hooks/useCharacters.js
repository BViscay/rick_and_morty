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
    if (!!characters.find((character) => character.id === Number(id)))
      return window.alert("Ese ID ya esta agregado");
    try {
      const result = await axios(`${API_URL_CHARACTERS}${id}`);

      if (result.data.name) {
        setCharacters((prevCharacters) => [...prevCharacters, result.data]);
      } else {
        window.alert("Ese ID ya esta agregado");
      }
    } catch (error) {
      console.log(error);
      window.alert("No existe un personaje con ese ID ERROR");
    }
  };

  const randomSearch = async () => {
    const randomId = Math.floor(Math.random() * 826) + 1;

    try {
      const result = await axios(`${API_URL_CHARACTERS}${randomId}`);

      if (result.data.name) {
        setCharacters((prevCharacters) => [...prevCharacters, result.data]);
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

  console.log(characters);

  return {
    onSearch,
    randomSearch,
    onClose,
    detailCharacter,
    characters,
    detailCharacters,
    setDetailCharacters,
  };
};

export default useCharacters;
