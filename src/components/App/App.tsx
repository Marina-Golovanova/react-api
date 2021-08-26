import React from "react";
import {
  SearchContext,
  LoadingContext,
  ArticlesContext,
  PageContext,
  TotalPagesContext,
} from "../context";
import { Header } from "../header/Header";
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
  const [totalPages, setTotalPages] = React.useState(0);

  return (
    <SearchContext.Provider
      value={{ search: inputSearch, setSearch: setInputSearch }}
    >
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <TotalPagesContext.Provider value={{ totalPages, setTotalPages }}>
          <PageContext.Provider value={{ page, setPage }}>
            <ArticlesContext.Provider value={{ articles, setArticles }}>
              <Header />
              <Layout>
                <SearchForm />
                <Articles />
              </Layout>
            </ArticlesContext.Provider>
          </PageContext.Provider>
        </TotalPagesContext.Provider>
      </LoadingContext.Provider>
    </SearchContext.Provider>
  );
};
