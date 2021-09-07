import { IStore } from "./types";

export const selectLoading = (state: IStore) => state.loading;

export const selectArticles = (state: IStore) => state.articles;

export const selectTotalArticlesCount = (state: IStore) =>
  state.totalArticlesCount;

export const selectPageSize = (state: IStore) => state.pageSize;

export const selectPage = (state: IStore) => state.page;

export const selectSortBy = (state: IStore) => state.sortBy;
