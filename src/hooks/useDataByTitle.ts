import { useSelector } from "react-redux";
import { selectArticles } from "../components/redux/selectors";

export const useDataByTitle = (title: string) => {
  const articles = useSelector(selectArticles);
  return articles.find((article) => article.title === title);
};
