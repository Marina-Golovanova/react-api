import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  SearchContext,
  LoadingContext,
  ArticlesContext,
  PageContext,
  TotalPagesContext,
  ArticleIdContext,
} from "../context";
import { Header } from "../header/Header";
import { Layout } from "../layout/Layout";
import { IArticle } from "../../types";
import { RouterApp } from "../router/Router";

import "./app.scss";

export const App: React.FC = () => {
  const [inputSearch, setInputSearch] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [articles, setArticles] = React.useState<IArticle[]>([]);
  const [page, setPage] = React.useState<number | string>(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [articleId, setArticleId] = React.useState("");

  return (
    <Router>
      <SearchContext.Provider
        value={{ search: inputSearch, setSearch: setInputSearch }}
      >
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
          <TotalPagesContext.Provider value={{ totalPages, setTotalPages }}>
            <PageContext.Provider value={{ page, setPage }}>
              <ArticlesContext.Provider value={{ articles, setArticles }}>
                <ArticleIdContext.Provider value={{ articleId, setArticleId }}>
                  <Header />
                  <Layout>
                    <RouterApp />
                  </Layout>
                </ArticleIdContext.Provider>
              </ArticlesContext.Provider>
            </PageContext.Provider>
          </TotalPagesContext.Provider>
        </LoadingContext.Provider>
      </SearchContext.Provider>
    </Router>
  );
};
