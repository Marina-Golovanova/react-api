import { IArticle, IPageSize, SortType } from "../../types";

export type IStore = {
  articles: IArticle[];
  loading: boolean;
  error: string | null;
  pageSize: IPageSize;
  page: string | number;
  sortBy: SortType;
  totalArticlesCount: number;
};
