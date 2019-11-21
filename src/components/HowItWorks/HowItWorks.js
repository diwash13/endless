import * as React from "react";

import { Step } from "./Step";

import styles from "./HowItWorks.module.css";

export const HowItWorks = ({ data }) => (
  <section className={styles.root}>
    {data.map(step => (
      <Step key={step.id} {...step} />
    ))}
  </section>
);
