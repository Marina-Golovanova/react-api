/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { Link } from "react-router-dom";
import { ArticlesContext, LoadingContext, TotalPagesContext } from "../context";
import { Loader } from "../loader/Loader";
import { PageInput } from "../page-input/PageInput";

import styles from "./articles.module.scss";

const cols = ["author", "description", "publishedAt", "title", "image"];

export const Articles: React.FC = () => {
  const { articles } = React.useContext(ArticlesContext);
  const { isLoading } = React.useContext(LoadingContext);
  const { totalPages } = React.useContext(TotalPagesContext);

  return (
    <div className={styles.articles}>
      <div className={styles.row}>
        {cols.map((col) => (
          <div className={styles.title} key={col}>
            {col}
          </div>
        ))}
      </div>
      {articles.map((article) => (
        <div className={styles.row} key={article.source.id}>
          <div className={styles.cell}>{article.author}</div>
          <div className={styles.cell}>{article.description}</div>
          <div className={styles.cell}>{article.publishedAt}</div>
          <div className={styles.cell}>
            <Link to={`details/:${article.title}`}>{article.title}</Link>
          </div>
          <img
            className={styles.cell}
            src={article.urlToImage}
            alt={article.title}
          />
        </div>
      ))}
      {isLoading && <Loader />}
      {!!articles.length && (
        <div className={styles.pageControls}>
          <PageInput />
          <span> / {totalPages}</span>
        </div>
      )}
    </div>
  );
};
