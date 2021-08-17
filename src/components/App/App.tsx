import React from "react";
import { SearchContext, LoadingContext, ArticlesContext } from "../context";
import { Layout } from "../layout/Layout";
import { SearchForm } from "../search-form/SearchForm";
import { IArticle } from "../../types";
import { Articles } from "../articles/Articles";

import "./app.scss";

export const App: React.FC = () => {
  const [inputSearch, setInputSearch] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [articles, setArticles] = React.useState<IArticle[]>([]);

  return (
    <SearchContext.Provider
      value={{ search: inputSearch, setSearch: setInputSearch }}
    >
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <ArticlesContext.Provider value={{ articles, setArticles }}>
          <Layout>
            <SearchForm />
            <Articles />
          </Layout>
        </ArticlesContext.Provider>
      </LoadingContext.Provider>
    </SearchContext.Provider>
  );
};
