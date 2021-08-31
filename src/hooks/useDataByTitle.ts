import React from "react";
import { ArticlesContext } from "../components/context";

export const useDataByTitle = (title: string) => {
  const { articles } = React.useContext(ArticlesContext);
  return articles.find((article) => article.title === title);
};
