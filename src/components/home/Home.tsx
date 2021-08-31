import React from "react";
import { SearchForm } from "../search-form/SearchForm";
import { Articles } from "../articles/Articles";

export const Home: React.FC = () => {
  return (
    <div>
      <SearchForm />
      <Articles />
    </div>
  );
};
