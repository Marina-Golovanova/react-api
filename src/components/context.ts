import React from "react";
import { IArticle } from "../types";

interface ISearchContext {
  search: string;
  setSearch: (value: string) => void;
}

interface ILoadingContext {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

interface IArticlesContext {
  articles: IArticle[];
  setArticles: (value: IArticle[]) => void;
}

interface IPageContext {
  page: number | string;
  setPage: (value: number | string) => void;
}

interface ITotalPagesContext {
  totalPages: number;
  setTotalPages: (value: number) => void;
}

export const SearchContext = React.createContext<ISearchContext>({
  search: "",
  setSearch: () => null,
});

export const LoadingContext = React.createContext<ILoadingContext>({
  isLoading: false,
  setIsLoading: () => null,
});

export const ArticlesContext = React.createContext<IArticlesContext>({
  articles: [],
  setArticles: () => null,
});

export const PageContext = React.createContext<IPageContext>({
  page: "",
  setPage: () => null,
});

export const TotalPagesContext = React.createContext<ITotalPagesContext>({
  totalPages: 0,
  setTotalPages: () => null,
});
