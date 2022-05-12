import { useNewsApi } from '../services/newsAdapter'
import { useNewsStorage } from '../services/storageAdapter'

// Note that the port interfaces are in the _application layer_,
// but their implementation is in the _adapter_ layer.
import { NewsService, NewsStorageService } from './ports'

export function useNews() {
  // Usually, we access services through Dependency Injection.
  // Here we can use hooks as a crooked “DI-container”.

  // The use case function doesn't call third-party services directly,
  // instead, it relies on the interfaces we declared earlier.
  const storage: NewsStorageService = useNewsStorage()
  const newsApi: NewsService = useNewsApi()

  // Ideally, we would pass a command as an argument,
  // which would encapsulate all input data.
  async function getNews(params?: any): Promise<void> {
    const news = await newsApi.fetchData(params)
    if (!!news && news?.articles.length > 0) {
      storage.updateNews(news?.articles)
    }
  }

  return {
    news: storage.news,
    loading: newsApi.loading,
    getNews,
  }
}
