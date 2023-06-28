import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/NavBar/NavBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Bienvenida from "./Views/Landing";
import Detail from "./components/Detail/Detail";
import Error from "./Views/Error/Error";
import About from "./components/About/About";
import Form from "./components/Form/Form";
function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "brunoviscay@gmail.com";
  const PASSWORD = "AAbb1234";

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

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
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/login" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
