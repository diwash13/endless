import * as React from "react";

import heroImage from "../../assets/photo-couch.jpg";
import styles from "./Hero.module.css";

export const Hero = () => (
  <section className={styles.root}>
    <img src={heroImage} className={styles.image} alt="Family watching tv" />
    <div className={styles.content}>
      <h2 className={styles.title}>New Game & Accessories</h2>
      <h1 className={styles.subtitle}>Monthly Packages</h1>
      <h1 className={styles.subtitle}>Excitement delivered daily.</h1>
      <div className={styles.description}>
        What's the best way to shop for the latest video games and peripherals?
        How about never shopping at all? You'll get new stuff on your doorstep -
        every month.
      </div>
      <button className={styles.button}>GET STARTED</button>
    </div>
  </section>
);
