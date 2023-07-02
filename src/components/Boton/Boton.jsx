import React from "react";
import styles from "./Boton.module.css";

export default function Boton({ children }) {
  return <button className={styles.Btn}>{children}</button>;
}
