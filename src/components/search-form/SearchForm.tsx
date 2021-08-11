import React from "react";
import { InputSearch } from "../input-search/InputSearch";

import styles from "./search-form.module.scss";

export const SearchForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <InputSearch />
    </form>
  );
};
