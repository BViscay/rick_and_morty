import styles from "./Card.module.css";
import { Link } from "react-router-dom";
export default function Card(props) {
  const { id, name, status, species, gender, origin, image } = props;
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img className={styles.cardImage} src={image} alt="" />
        </div>
        <div className={styles.cardBack}>
          <div className={styles.cardContent}>
            <Link to={`/detail/${id}`}>
              <h2 className={styles.cardName}>{name}</h2>
            </Link>
            <div>
              <h4 className={styles.cardProp}>Origin: {origin}</h4>
              <h4 className={styles.cardProp}>Species: {species}</h4>
              <h4 className={styles.cardProp}>Gender: {gender}</h4>
              <h4 className={styles.cardProp}>Status: {status}</h4>
            </div>
            <button onClick={props.onClose} className={styles.button}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
