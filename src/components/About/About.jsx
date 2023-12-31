import styles from "./About.module.css";
import React, { useEffect } from "react";
import aboutBG from "../../img/AboutBG.png";
import avatar from "../../img/Avatar.png";
import aboutImg from "../../img/About.png";
function About() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${aboutBG})`;

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.AboutImg} src={aboutImg} alt="About" />
      <h1 className={styles.title}>
        Welcome to our Rick and Morty-themed website!
      </h1>
      <div className={styles.content}>
        <div className={styles.presentation}>
          <p className={styles.text}>
            Immerse yourself in the fascinating universe of this popular
            animated series with our Rick and Morty website. Here, you'll find
            everything you need to know about the eccentric characters,
            intricate plotlines, and endless adventures that unfold across
            different dimensions.
          </p>
          <p className={styles.text}>
            As a student at SoyHenry's coding bootcamp, Bruno is honing his
            skills in web development. Through his training at SoyHenry, he has
            acquired the necessary knowledge to create an attractive and
            functional website. His love for Rick and Morty merges with his
            enthusiasm for technology, resulting in this unique platform.
          </p>
        </div>

        <div>
          <h2 className={styles.subtitle}>
            Introducing Bruno, the new character in the series:
          </h2>
          <h3 className={styles.h3title}>Name: Bruno</h3>
          <div className={styles.character}>
            <img className={styles.image} src={avatar} alt="avatar" />

            <p className={styles.text}>
              Role: React Developer and SoyHenry Bootcamp Student Personality:
              Bruno is a creative and committed individual. His love for Rick
              and Morty has driven him to create this website and share his
              enthusiasm with fellow fans of the show. He is passionate about
              web design and strives to provide an exceptional user experience
              through his work.
            </p>

            <p className={styles.text}>
              Skills: Bruno excels in web application development using React, a
              popular and versatile JavaScript library. With his training at the
              SoyHenry bootcamp, he possesses a strong foundation in
              programming, interface design, and frontend development. His
              ability to blend creativity with technology is evident in every
              aspect of our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
