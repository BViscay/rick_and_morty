import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavs, removeFavs } from "../../redux/actions";
import { useEffect, useState } from "react";

export default function Card(props) {
  const { id, name, status, species, gender, origin, image } = props;

  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFav(myFavorites.some((fav) => fav.id === props.id));
  }, [myFavorites, props.id]);

  const handleFavorite = () => {
    if (isFav) {
      dispatch(removeFavs(id));
      setIsFav(false);
    } else {
      dispatch(addFavs(props));
      setIsFav(true);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img className={styles.cardImage} src={image} alt="" />
        </div>
        <div className={styles.cardBack}>
          <div className={styles.cardContent}>
            {isFav ? (
              <button className={styles.heartButton} onClick={handleFavorite}>
                ❤️
              </button>
            ) : (
              <button className={styles.heartButton} onClick={handleFavorite}>
                🤍
              </button>
            )}
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
