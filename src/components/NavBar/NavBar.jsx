import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";
import { IoHome } from "react-icons/io5";
import { TbInfoSquareFilled } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { GiCardRandom } from "react-icons/gi";

export default function Nav(props) {
  return (
    <header>
      <nav className={styles.navBar}>
        <span className={styles.buttonsContainer}>
          <Link to="/home">
            <Boton>
              <IoHome />
            </Boton>
          </Link>
          <Link to="/about">
            <Boton>
              <TbInfoSquareFilled />
            </Boton>
          </Link>
          <Link to="/favorites">
            <Boton>
              <MdFavorite />
            </Boton>
          </Link>
        </span>
        <button onClick={props.randomSearch} className={styles.buttonRandom}>
          <GiCardRandom />
        </button>
        <SearchBar onSearch={props.onSearch} />
      </nav>
    </header>
  );
}
