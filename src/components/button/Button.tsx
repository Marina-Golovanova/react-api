import React from "react";

import styles from "./button.module.scss";

type ButtonProps = {
  text: string;
  onChange?: () => void;
};

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={styles.button} onChange={props.onChange}>
      {props.text}
    </button>
  );
};
