import type { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { axiosInstance } from "../../services/api";
import { GET200_Articles, SortType, IArticle, IPageSize } from "../../types";
import { IStore } from "./types";

export const REQUEST_ARTICLES = "REQUEST_ARTICLES";
export const LOADING_ARTICLES = "LOADING_ARTICLES";
export const ERROR_REQUEST_ARTICLES = "ERROR_REQUEST_ARTICLES";
export const SET_ARTICLES = "SET_ARTICLES";
export const SET_PAGE_SIZE = "SET_PAGE_SIZE";
export const SET_PAGE = "SET_PAGE";
export const SET_SORT_BY = "SET_SORT_BY";
export const TOTAL_ARTICLES_COUNT = "TOTAL_ARTICLES_COUNT";

export type ILoadingArticles = {
  type: typeof LOADING_ARTICLES;
  payload: { value: boolean };
};

export type IErrorRequestArticles = {
  type: typeof ERROR_REQUEST_ARTICLES;
  payload: { err: string | null };
};

export type ISetArticles = {
  type: typeof SET_ARTICLES;
  payload: {
    articles: IArticle[];
  };
};

export type ISetPageSize = {
  type: typeof SET_PAGE_SIZE;
  payload: {
    pageSize: IPageSize;
  };
};

export type ISetPage = {
  type: typeof SET_PAGE;
  payload: {
    page: number | string;
  };
};

export type ISetSortBy = {
  type: typeof SET_SORT_BY;
  payload: {
    sortBy: SortType;
  };
};

export type ITotalArticlesCount = {
  type: typeof TOTAL_ARTICLES_COUNT;
  payload: {
    totalArticlesCount: number;
  };
};

export type IArticlesActionsUnion =
  | ILoadingArticles
  | IErrorRequestArticles
  | ISetArticles
  | ISetPageSize
  | ISetPage
  | ISetSortBy
  | ITotalArticlesCount;

export const loadingArticles = (value: boolean): ILoadingArticles => ({
  type: LOADING_ARTICLES,
  payload: {
    value,
  },
});

export const errorRequestArticles = (
  err: string | null
): IErrorRequestArticles => ({
  type: ERROR_REQUEST_ARTICLES,
  payload: {
    err,
  },
});

export const setArticles = (articles: IArticle[]): ISetArticles => ({
  type: SET_ARTICLES,
  payload: {
    articles,
  },
});

export const setPageSize = (pageSize: IPageSize): ISetPageSize => ({
  type: SET_PAGE_SIZE,
  payload: {
    pageSize,
  },
});

export const setPage = (page: number | string): ISetPage => ({
  type: SET_PAGE,
  payload: {
    page,
  },
});

export const setSortBy = (sortBy: SortType): ISetSortBy => ({
  type: SET_SORT_BY,
  payload: {
    sortBy,
  },
});

export const setTotalArticlesCount = (
  totalArticlesCount: number
): ITotalArticlesCount => ({
  type: TOTAL_ARTICLES_COUNT,
  payload: {
    totalArticlesCount,
  },
});

export const requestArticles = (params: { title: string }) => {
  return async (dispatch: Dispatch, getState: () => IStore) => {
    const state = getState();
    dispatch(loadingArticles(true));
    dispatch(errorRequestArticles(null));

    try {
      const response: AxiosResponse<GET200_Articles> = await axiosInstance.get(
        `v2/everything?q=${params.title}&apiKey=2dbf0f399b794cd5ac7870b8addf6299&sortBy=${state.sortBy}&pageSize=${state.pageSize}&page=${state.page}`
      );
      dispatch(setArticles(response.data.articles));
      dispatch(setTotalArticlesCount(response.data.totalResults));
    } catch (e) {
      dispatch(errorRequestArticles(e.message));
    } finally {
      dispatch(loadingArticles(false));
    }
  };
};
