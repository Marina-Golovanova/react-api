import React from "react";
import { useParams } from "react-router";
import { AxiosResponse } from "axios";
import { useDataByTitle } from "../../hooks/useDataByTitle";
import { axiosInstance } from "../../services/api";
import { GET200_Articles_From_Url } from "../../types";
import { ArticlesContext } from "../context";

import styles from "./details.module.scss";

export const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { articles, setArticles } = React.useContext(ArticlesContext);

  React.useEffect(() => {
    if (!articles.length) {
      try {
        axiosInstance
          .get(
            `v2/everything?q=${id.slice(
              1
            )}&apiKey=2dbf0f399b794cd5ac7870b8addf6299`
          )
          .then((response: AxiosResponse<GET200_Articles_From_Url>) => {
            setArticles(response.data.articles);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [articles.length, id, setArticles]);

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
