/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { ArticlesContext } from "../context";

import styles from "./articles.module.scss";

const cols = ["author", "description", "publishedAt", "title", "image"];

export const Articles: React.FC = () => {
  const { articles } = React.useContext(ArticlesContext);

  return (
    <div className={styles.articles}>
      <div className={styles.row}>
        {cols.map((col) => (
          <div className={styles.title} key={col}>
            {col}
          </div>
        ))}
      </div>
      {cols.map((col) => (
        <>
          {articles.map((article) => (
            <div className={styles.row} key={col}>
              <div className={styles.cell}>{article.author}</div>
              <div className={styles.cell}>{article.description}</div>
              <div className={styles.cell}>{article.publishedAt}</div>
              <div className={styles.cell}>{article.title}</div>
              <img className={styles.cell} src={article.urlToImage} alt={col} />
            </div>
          ))}
        </>
      ))}
    </div>
  );
};
