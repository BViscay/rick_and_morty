import Card from "../Card/Card";
import styles from "./Cards.module.css";
export default function Cards(props) {
  const characters = props.characters;
  return (
    <div className={styles.divCont}>
      <div className={styles.divCards}>
        {characters.map((character) => (
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
    </div>
  );
}
