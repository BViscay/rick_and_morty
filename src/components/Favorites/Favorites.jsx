import styles from "./Favorites.module.css";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { removeFavs } from "../../redux/actions";
import { useEffect } from "react";
import FavImg from "../../img/FavImg.jpg";
import fav from "../../img/Favorites.png";

function Favorites() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${FavImg})`;

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleClose = (id) => {
    dispatch(removeFavs(id));
  };

  return (
    <div className={styles.divCont}>
      <img className={styles.FavImg} src={fav} alt="Favorites" />
      <div className={styles.divCards}>
        {favorites.map((fav) => (
          <Card key={fav.id} onClose={() => handleClose(fav.id)} {...fav} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
