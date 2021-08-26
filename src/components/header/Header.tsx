import React from "react";
import { Layout } from "../layout/Layout";

import styles from "./header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Layout>
        <nav className={styles.menu}>
          <ul className={styles.menu}>
            <li className={styles.menuItemActive}>About</li>
            <li className={styles.menuItem}>Details</li>
          </ul>
        </nav>
      </Layout>
    </header>
  );
};
