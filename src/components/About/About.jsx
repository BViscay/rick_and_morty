import styles from "./About.module.css";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import aboutBG from "../../img/AboutBG.png";
function About() {
  const location = useLocation();

  useEffect(() => {
    document.body.style.backgroundImage = `url(${aboutBG})`;

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default About;
