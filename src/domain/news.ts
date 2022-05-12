export interface NewsType {
  source: NewsSource
  author: any
  title: string
  description: string
  url: string
  urlToImage: any
  publishedAt: string
  content: string
}
export interface NewsResponse {
  status: string
  totalResults: number
  articles: NewsType[]
}
export interface NewsSource {
  id: any
  name: string
}
