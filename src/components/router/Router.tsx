import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { About } from "../about/About";
import { Home } from "../home/Home";
import { NotFound } from "../not-found/NotFound";
import { Details } from "../details/Details";

import "./router.scss";

export const RouterApp: React.FC = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        timeout={300}
        classNames="page"
        key={location.key}
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
