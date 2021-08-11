import React from "react";
import { InputSearch } from "../input-search/InputSearch";
import { Button } from "../button/Button";

import styles from "./search-form.module.scss";

export const SearchForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <InputSearch />
      <Button text="search" onChange={() => console.log} />
    </form>
  );
};
