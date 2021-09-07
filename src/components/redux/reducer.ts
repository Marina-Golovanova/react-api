import { createStore } from "redux";
import { IPageSize, SortType } from "../../types";
import {
  ERROR_REQUEST_ARTICLES,
  IArticlesActionsUnion,
  LOADING_ARTICLES,
  SET_ARTICLES,
  SET_PAGE,
  SET_PAGE_SIZE,
  SET_SORT_BY,
  TOTAL_ARTICLES_COUNT,
} from "./actions";
import { IStore } from "./types";

const initialState = {
  articles: [],
  loading: false,
  error: null,
  pageSize: 10 as IPageSize,
  page: 1,
  sortBy: "popularity" as SortType,
  totalArticlesCount: 0,
};

export function reducer(
  state: IStore = initialState,
  action: IArticlesActionsUnion
): IStore {
  switch (action.type) {
    case LOADING_ARTICLES:
      return { ...state, loading: action.payload.value };

    case ERROR_REQUEST_ARTICLES:
      return { ...state, error: action.payload.err };

    case SET_ARTICLES:
      return { ...state, articles: action.payload.articles };

    case SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload.pageSize };

    case SET_PAGE:
      return { ...state, page: action.payload.page };

    case SET_SORT_BY:
      return { ...state, sortBy: action.payload.sortBy };

    case TOTAL_ARTICLES_COUNT:
      return {
        ...state,
        totalArticlesCount: action.payload.totalArticlesCount,
      };
    default:
      return state;
  }
}

export const store = createStore(reducer);
