import styles from "./Boton.module.css";
export default function Boton(props) {
  const { text } = props;
  return <button className={styles.Btn}>{text}</button>;
}
