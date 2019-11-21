import * as React from "react";

import logo from "../../assets/logo-endless.svg";
import styles from "./Header.module.css";

export const Header = () => (
  <header className={styles.root}>
    <img src={logo} className="App-logo" alt="logo" className={styles.image} />
  </header>
);
