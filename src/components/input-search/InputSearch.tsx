import React from "react";

import styles from "./input-search.module.scss";

export const InputSearch: React.FC = () => {
  return <input className={styles.input} type="text" placeholder="search" />;
};
