import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputSearch } from "../input-search/InputSearch";
import { Button } from "../button/Button";
import { SortInput } from "../sort-input/SortInput";
import { SearchContext } from "../context";
import { IPageSize, SortType } from "../../types";
import { requestArticles, setPageSize, setSortBy } from "../redux/actions";
import { selectPageSize, selectSortBy } from "../redux/selectors";

import styles from "./search-form.module.scss";

export const SearchForm: React.FC = () => {
  const searchContext = React.useContext(SearchContext);

  const pageSizeArr: IPageSize[] = [10, 50, 100];

  const dispatch = useDispatch();

  const pageSize = useSelector(selectPageSize);
  const sortBy = useSelector(selectSortBy);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      requestArticles({
        title: searchContext.search,
      })
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputSearch />
      <Button text="search" />

      <div className={styles.sort}>
        {Object.keys(SortType).map((sortType) => (
          <SortInput
            key={sortType}
            label={sortType}
            value={sortType as SortType}
            checked={sortType === sortBy}
            onChange={() => dispatch(setSortBy(sortType as SortType))}
          />
        ))}
      </div>
      <div className={styles.pageSize}>
        {pageSizeArr.map((el) => (
          <SortInput
            key={el}
            label={`${el} results per page`}
            value={String(el)}
            checked={el === pageSize}
            onChange={() => dispatch(setPageSize(el))}
          />
        ))}
      </div>
    </form>
  );
};
