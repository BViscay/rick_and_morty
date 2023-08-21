import Card from "../Card/Card";
import styles from "./Cards.module.css";
import Home from "../../img/Home.png";
import usePagination from "../../hooks/usePagination";

export default function Cards(props) {
  const characters = props.characters;
  const { currentCards, nextPage, prevPage, hasPreviousPage, hasNextPage } =
    usePagination(characters);

  return (
    <div className={styles.divCont}>
      <img className={styles.homeImg} src={Home} alt="Home" />
      <div className={styles.divCards}>
        {currentCards.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={() => props.onClose(character.id)}
          />
        ))}
      </div>
      <div className={styles.divPagination}>
        {hasPreviousPage && (
          <button onClick={prevPage} className={styles.button}>
            Previous
          </button>
        )}
        {hasNextPage && (
          <button onClick={nextPage} className={styles.button}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
