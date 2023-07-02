import styles from "./Favorites.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

function Favorites() {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <div className={styles.divCont}>
      <div className={styles.divCards}>
        {favorites.map((fav) => (
          <Card key={fav.id} {...fav} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
