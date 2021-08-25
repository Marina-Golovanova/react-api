import React from "react";
// import { SortType } from "../../types";

import styles from "./sort-input.module.scss";

type SortInputProps = {
  label: string;
  value: string;
  onChange: () => void;
  checked: boolean;
};

export const SortInput: React.FC<SortInputProps> = (props) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type="radio"
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />
      {props.label}
    </label>
  );
};
