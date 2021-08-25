import React from "react";
import {
  SearchContext,
  LoadingContext,
  ArticlesContext,
  PageContext,
  PageSizeContext,
} from "../context";
import { Layout } from "../layout/Layout";
import { SearchForm } from "../search-form/SearchForm";
import { IArticle } from "../../types";
import { Articles } from "../articles/Articles";

import "./app.scss";

export const App: React.FC = () => {
  const [inputSearch, setInputSearch] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [articles, setArticles] = React.useState<IArticle[]>([]);
  const [page, setPage] = React.useState<number | string>(1);
  const [pageSize, setPageSize] = React.useState(10);

  return (
    <SearchContext.Provider
      value={{ search: inputSearch, setSearch: setInputSearch }}
    >
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <PageSizeContext.Provider value={{ pageSize, setPageSize }}>
          <PageContext.Provider value={{ page, setPage }}>
            <ArticlesContext.Provider value={{ articles, setArticles }}>
              <Layout>
                <SearchForm />
                <Articles />
              </Layout>
            </ArticlesContext.Provider>
          </PageContext.Provider>
        </PageSizeContext.Provider>
      </LoadingContext.Provider>
    </SearchContext.Provider>
  );
};
