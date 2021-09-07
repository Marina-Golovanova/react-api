import React from "react";

interface ISearchContext {
  search: string;
  setSearch: (value: string) => void;
}

export const SearchContext = React.createContext<ISearchContext>({
  search: "",
  setSearch: () => null,
});
