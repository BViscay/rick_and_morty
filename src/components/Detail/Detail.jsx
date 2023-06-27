import styles from "./Detail.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Detail(props) {
  const { id } = useParams();
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  const [character, setCharacter] = useState([]);

  return (
    <div className={styles.container}>
      {character.name && (
        <div className={`${styles.card} ${styles.centered}`}>
          <img
            className={styles.image}
            src={character.image}
            alt={character.name}
          />
          <div className={styles.details}>
            <h2 className={styles.name}>{character.name}</h2>
            <div className={styles.properties}>
              <p className={styles.property}>Status: {character.status}</p>
              <p className={styles.property}>Species: {character.species}</p>
              <p className={styles.property}>Gender: {character.gender}</p>
              <p className={styles.property}>
                Origin: {character.origin && character.origin.name}
              </p>
            </div>
            <div>
              <Link to="/home">
                <button className={styles.button} onClick={props.OnClose}>
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
