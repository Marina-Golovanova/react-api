import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { SearchContext } from "../context";
import { Header } from "../header/Header";
import { Layout } from "../layout/Layout";
import { RouterApp } from "../router/Router";
import store from "../store";

import "./app.scss";

export const App: React.FC = () => {
  const [inputSearch, setInputSearch] = React.useState("");

  return (
    <Provider store={store}>
      <Router>
        <SearchContext.Provider
          value={{ search: inputSearch, setSearch: setInputSearch }}
        >
          <Header />
          <Layout>
            <RouterApp />
          </Layout>
        </SearchContext.Provider>
      </Router>
    </Provider>
  );
};
