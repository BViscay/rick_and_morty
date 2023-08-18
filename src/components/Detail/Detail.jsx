import styles from "./Detail.module.css";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useCharacters from "../../hooks/useCharacters";

export default function Detail(props) {
  const { id } = useParams();
  const { detailCharacter, detailCharacters } = useCharacters();

  useEffect(() => {
    if (!detailCharacters.id) {
      detailCharacter(id);
    }
  }, [id, detailCharacters.id, detailCharacter]);

  return (
    <div className={styles.container}>
      {detailCharacters.name && (
        <div className={`${styles.card} ${styles.centered}`}>
          <img
            className={styles.image}
            src={detailCharacters.image}
            alt={detailCharacters.name}
          />
          <div className={styles.details}>
            <h2 className={styles.name}>{detailCharacters.name}</h2>
            <div className={styles.properties}>
              <p className={styles.property}>
                Status: {detailCharacters.status}
              </p>
              <p className={styles.property}>
                Species: {detailCharacters.species}
              </p>
              <p className={styles.property}>
                Gender: {detailCharacters.gender}
              </p>
              <p className={styles.property}>
                Origin:{" "}
                {detailCharacters.origin && detailCharacters.origin.name}
              </p>
            </div>
            <div>
              <Link to="/home">
                <button className={styles.button} onClick={props.onClose}>
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
