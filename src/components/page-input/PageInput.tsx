import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPage } from "../redux/selectors";
import { setPage } from "../redux/actions";

import styles from "./page-input.module.scss";

export const PageInput: React.FC = () => {
  const page = useSelector(selectPage);

  const dispatch = useDispatch();

  const handlerInput = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    const regexp = /\d+/;
    const matchedValue = target.value.match(regexp);
    const newValue = matchedValue ? matchedValue[0] : "";
    dispatch(setPage(newValue));
  };

  return (
    <label className={styles.label}>
      <input type="text" value={page} onChange={handlerInput} />
    </label>
  );
};
