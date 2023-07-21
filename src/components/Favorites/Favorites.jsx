import styles from "./Favorites.module.css";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { removeFavs, filter, order } from "../../redux/actions";
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

  const handleChangeFilter = (event) => {
    dispatch(filter(event.target.value));
  };

  const handleChangeOrder = (event) => {
    dispatch(order(event.target.value));
  };

  const handleClose = (id) => {
    dispatch(removeFavs(id));
  };

  return (
    <div className={styles.divCont}>
      <img className={styles.FavImg} src={fav} alt="Favorites" />
      <div>
        <div className={styles.filterBar}>
          <div>
            <select
              className={styles.filterItem}
              name="filter"
              onChange={handleChangeFilter}
            >
              <option className={styles.filterOption} value="">
                All genders
              </option>
              <option className={styles.filterOption} value="Male">
                Male
              </option>
              <option className={styles.filterOption} value="Female">
                Female
              </option>
              <option className={styles.filterOption} value="unknown">
                Unknown
              </option>
            </select>
          </div>
          <div>
            <select
              className={styles.filterItem}
              name="order"
              onChange={handleChangeOrder}
            >
              <option className={styles.filterOption} value="A">
                Ascendent
              </option>
              <option className={styles.filterOption} value="D">
                Descendent
              </option>
            </select>
          </div>
        </div>
        <div className={styles.divCards}>
          {favorites.map((fav) => (
            <Card key={fav.id} onClose={() => handleClose(fav.id)} {...fav} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
