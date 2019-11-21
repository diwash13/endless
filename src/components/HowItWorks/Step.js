import * as React from "react";

import styles from "./Steps.module.css";

export const Step = ({ stepNumber, versionContent }) => (
  <section className={styles.root}>
    <h1 className={styles.title}>{stepNumber}</h1>
    <h3>{versionContent[0].title}</h3>
    <div>{versionContent[0].body}</div>
  </section>
);
