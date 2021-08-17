import React from "react";
import { SortType } from "../../types";

import styles from "./sort-input.module.scss";

type SortInputProps = {
  label: string;
  value: SortType;
};

export const SortInput: React.FC<SortInputProps> = (props) => {
  return (
    <label className={styles.label}>
      {props.label}
      <input className={styles.input} type="radio" value={props.value} />
    </label>
  );
};
