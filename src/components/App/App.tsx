import React from "react";
import { SearchContext, LoadingContext } from "../context";
import { Layout } from "../layout/Layout";
import { SearchForm } from "../search-form/SearchForm";
import { Loader } from "../loader/Loader";

import "./app.scss";

export const App: React.FC = () => {
  const [inputSearch, setInputSearch] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <SearchContext.Provider
      value={{ search: inputSearch, setSearch: setInputSearch }}
    >
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <Layout>
          <SearchForm />
          <Loader />
        </Layout>
      </LoadingContext.Provider>
    </SearchContext.Provider>
  );
};
