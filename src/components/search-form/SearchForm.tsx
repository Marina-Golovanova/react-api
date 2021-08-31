import React from "react";
import { AxiosResponse } from "axios";
import { InputSearch } from "../input-search/InputSearch";
import { Button } from "../button/Button";
import { SortInput } from "../sort-input/SortInput";
import {
  ArticlesContext,
  LoadingContext,
  PageContext,
  SearchContext,
  TotalPagesContext,
} from "../context";
import { axiosInstance } from "../../services/api";
import { GET200_Articles, IPageSize, SortType } from "../../types";

import styles from "./search-form.module.scss";

export const SearchForm: React.FC = () => {
  const loadingContext = React.useContext(LoadingContext);
  const searchContext = React.useContext(SearchContext);
  const articlesContext = React.useContext(ArticlesContext);
  const { setTotalPages } = React.useContext(TotalPagesContext);
  const { page } = React.useContext(PageContext);
  const [sortBy, setSortBy] = React.useState<SortType>(SortType.popularity);
  const [pageSize, setPageSize] = React.useState(10);

  const pageSizeArr: IPageSize[] = [10, 50, 100];

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    loadingContext.setIsLoading(true);

    try {
      const response: AxiosResponse<GET200_Articles> = await axiosInstance.get(
        `v2/everything?q=${searchContext.search}&apiKey=2dbf0f399b794cd5ac7870b8addf6299&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}`
      );
      setTotalPages(Math.ceil(response.data.totalResults / pageSize));
      articlesContext.setArticles(response.data.articles);
    } catch (err) {
      console.log(err);
    } finally {
      loadingContext.setIsLoading(false);
    }
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
            onChange={() => setSortBy(sortType as SortType)}
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
            onChange={() => setPageSize(el)}
          />
        ))}
      </div>
    </form>
  );
};
