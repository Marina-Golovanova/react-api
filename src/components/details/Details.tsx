import React from "react";
import { useParams } from "react-router";
import { useDataByTitle } from "../../hooks/useDataByTitle";
import { requestArticles } from "../redux/actions";

import styles from "./details.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectArticles } from "../redux/selectors";

export const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  const articles = useSelector(selectArticles);

  React.useEffect(() => {
    if (!articles.length) {
      try {
        dispatch(requestArticles({ title: id.slice(1) }));
      } catch (err) {
        console.log(err);
      }
    }
  }, [articles.length, dispatch, id]);

  const article = useDataByTitle(id.substr(1));

  return (
    <div className={styles.layout}>
      {article &&
        Object.entries(article).map((el, idx) => (
          <div className={styles.titleContainer} key={idx}>
            <div className={styles.title}>{`${el[0]}:`}</div>
            {!el[0].startsWith("url") && (
              <div className={styles.content}>
                {el[0] === "source" ? `${el[1].name}` : `${el[1]}`}
              </div>
            )}
            {el[0] === "url" && (
              <a
                target="_blank
"
                href={el[1]}
              >
                {el[1]}
              </a>
            )}
            {el[0] === "urlToImage" && <img src={el[1]} alt={el[0]} />}
          </div>
        ))}
    </div>
  );
};
