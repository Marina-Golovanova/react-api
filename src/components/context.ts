import React from "react";

interface ISearchContext {
  search: string;
  setSearch: (value: string) => void;
}

interface ILoadingContext {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

export const SearchContext = React.createContext<ISearchContext>({
  search: "",
  setSearch: () => null,
});

export const LoadingContext = React.createContext<ILoadingContext>({
  isLoading: false,
  setIsLoading: () => null,
});
