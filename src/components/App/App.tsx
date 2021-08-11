import React from "react";
import { Layout } from "../layout/Layout";
import { SearchForm } from "../search-form/SearchForm";

import "./app.scss";

export const App: React.FC = () => {
  return (
    <Layout>
      <SearchForm />
    </Layout>
  );
};
