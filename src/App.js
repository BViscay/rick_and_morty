import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Bienvenida from "./Views/Landing";
import Detail from "./components/Detail/Detail";
import Error from "./Views/Error/Error";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import useLogin from "./hooks/useLogin";
import useCharacters from "./hooks/useCharacters";

function App() {
  const { onSearch, onClose, characters } = useCharacters();
  const { isLogin, login } = useLogin();

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Bienvenida />} />
        <Route
          path="/login"
          element={<Form login={login} isLogin={isLogin} />}
        />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
