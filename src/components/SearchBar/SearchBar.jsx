import { useState } from "react";
import styles from "./SearchBar.module.css";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    props.onSearch(id);
  };

  return (
    <div className={styles.contenedor}>
      <form className={styles.search}>
        <input
          type="search"
          onChange={handleChange}
          placeholder="Ingresa Aqui el ID"
          className={styles.searchInput}
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          <AiOutlineUsergroupAdd />
        </button>
      </form>
    </div>
  );
}
