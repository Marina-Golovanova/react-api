export interface IArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface GET200_Articles {
  articles: IArticle[];
  totalResults: number;
}

export enum SortType {
  popularity = "popularity",
  relevancy = "relevancy",
  publishedAt = "publishedAt ",
}

export type IPageSize = 10 | 50 | 100;
