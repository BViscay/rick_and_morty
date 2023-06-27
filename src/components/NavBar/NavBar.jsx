import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";
export default function Nav(props) {
  return (
    <header>
      <nav className={styles.navBar}>
        <span className={styles.buttonsContainer}>
          <Link to="/home">
            <Boton text="Home" />
          </Link>
          <Link to="/about">
            <Boton text="About" />
          </Link>
        </span>

        <SearchBar onSearch={props.onSearch} />
      </nav>
    </header>
  );
}
