import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "../layout/Layout";

import styles from "./header.module.scss";

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <Layout>
        <nav className={styles.menu}>
          <ul className={styles.menu}>
            <Link to="/">
              <li
                className={
                  pathname === "/" ? styles.menuItemActive : styles.menuItem
                }
              >
                Home
              </li>
            </Link>
            <Link to="/about">
              <li
                className={
                  pathname === "/about"
                    ? styles.menuItemActive
                    : styles.menuItem
                }
              >
                About
              </li>
            </Link>
          </ul>
        </nav>
      </Layout>
    </header>
  );
};
