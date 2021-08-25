import React from "react";
import { PageContext } from "../context";

import styles from "./page-input.module.scss";

export const PageInput: React.FC = () => {
  const pageContext = React.useContext(PageContext);

  const handlerInput = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    const regexp = /\d+/;
    const matchedValue = target.value.match(regexp);
    const newValue = matchedValue ? matchedValue[0] : "";
    pageContext.setPage(newValue);
  };

  return (
    <label className={styles.label}>
      <input type="text" value={pageContext.page} onChange={handlerInput} />
    </label>
  );
};
