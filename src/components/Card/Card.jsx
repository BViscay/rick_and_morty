import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavs, removeFavs } from "../../redux/actions";

export default function Card(props) {
  const { id, name, status, species, gender, origin, image } = props;

  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const isFav = myFavorites.some((fav) => fav.id === id);

  const handleFavorite = () => {
    if (isFav) {
      dispatch(removeFavs(id));
    } else {
      dispatch(addFavs(props));
    }
  };

  const handleClose = () => {
    if (isFav) {
      dispatch(removeFavs(id));
    }
    props.onClose();
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img className={styles.cardImage} src={image} alt="" />
        </div>
        <div className={styles.cardBack}>
          <div className={styles.cardContent}>
            <button className={styles.heartButton} onClick={handleFavorite}>
              {isFav ? "❤️" : "🤍"}
            </button>
            <Link to={`/detail/${id}`}>
              <h2 className={styles.cardName}>{name}</h2>
            </Link>
            <div>
              <h4 className={styles.cardProp}>Origin: {origin}</h4>
              <h4 className={styles.cardProp}>Species: {species}</h4>
              <h4 className={styles.cardProp}>Gender: {gender}</h4>
              <h4 className={styles.cardProp}>Status: {status}</h4>
            </div>
            <button onClick={handleClose} className={styles.button}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
