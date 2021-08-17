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
}

export enum SortType {
  relevance = "relevancy",
  popularity = "popularity",
  publishedAt = "publishedAt ",
}
