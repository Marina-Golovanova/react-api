import React from "react";

import styles from "./loader.module.scss";

export const Loader: React.FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.loader}></div>
    </div>
  );
};
