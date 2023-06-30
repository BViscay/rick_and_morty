import styles from "./Error.module.css";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import bg404 from "../../img/BG404.png";
import portal from "../../img/Portal.gif";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.body.style.backgroundImage = `url(${bg404})`;

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.errorContainer}>
        <h2 className={styles.errorNumber}>4</h2>
        <img className={styles.portalImg} src={portal} alt="Portal" />
        <h2 className={styles.errorNumber}>4</h2>
      </div>
      <p className={styles.paragraph}>
        La URL "{location.pathname}" no coincide con ninguna ruta existente.
      </p>
    </div>
  );
};

export default NotFound;
