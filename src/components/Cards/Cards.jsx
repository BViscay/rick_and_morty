import Card from "../Card/Card";
import styles from "./Cards.module.css";
import Home from "../../img/Home.png";
import { useState } from "react";

export default function Cards(props) {
  const characters = props.characters;
  const cardsInPage = 5;
  const [actualPage, setActualPage] = useState(1);

  const indexOfLastCard = actualPage * cardsInPage;
  const indexOfFirstCard = indexOfLastCard - cardsInPage;
  const currentCards = characters.slice(indexOfFirstCard, indexOfLastCard);

  const nextPage = () => {
    setActualPage(actualPage + 1);
  };

  const prevPage = () => {
    setActualPage(actualPage - 1);
  };

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
        {actualPage > 1 && (
          <button onClick={prevPage} className={styles.button}>
            Previous
          </button>
        )}
        {indexOfLastCard < characters.length && (
          <button onClick={nextPage} className={styles.button}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
