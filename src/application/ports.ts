import { NewsResponse, NewsType } from '../domain/news'

export interface NewsStorageService {
  news?: NewsType[]
  updateNews(news: NewsType[]): void
}

export interface NewsService {
  data?: NewsResponse
  loading: boolean
  error: any
  fetchData(params: any): Promise<NewsResponse | null>
}
