import React, { useState, useEffect } from "react";
import popupImage from "../../img/PopUp.gif";
import styles from "./PopUp.module.css";
import { Link } from "react-router-dom";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className={styles.popupContainer}>
          <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
              <img src={popupImage} alt="Imagen" />
              <Link to="/login">
                <button className={styles.button} onClick={closePopup}>
                  Entrar
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
