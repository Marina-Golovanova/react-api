import React from "react";
import { InputSearch } from "../input-search/InputSearch";
import { Button } from "../button/Button";
import { SortInput } from "../sort-input/SortInput";
import { ArticlesContext, LoadingContext, SearchContext } from "../context";
import { axiosInstance } from "../../services/api";
import { GET200_Articles, SortType } from "../../types";

import styles from "./search-form.module.scss";
import { AxiosResponse } from "axios";

export const SearchForm: React.FC = () => {
  const loadingContext = React.useContext(LoadingContext);
  const searchContext = React.useContext(SearchContext);
  const articlesContext = React.useContext(ArticlesContext);
  const [sortBy, setSortBy] = React.useState<SortType>(SortType.popularity);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    loadingContext.setIsLoading(true);

    try {
      const response: AxiosResponse<GET200_Articles> = await axiosInstance.get(
        `v2/everything?q=${searchContext.search}&apiKey=2dbf0f399b794cd5ac7870b8addf6299`
      );
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
        <SortInput label="popularity" value={sortBy} />
        <SortInput label="relevancy" value={sortBy} />
        <SortInput label="published" value={sortBy} />
      </div>
    </form>
  );
};
