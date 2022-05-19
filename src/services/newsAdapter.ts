import { useState } from 'react'

import { NewsResponse } from '../domain/news'

// Hook

export const useNewsApi = () => {
  const [data, setData] = useState<NewsResponse>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState('')

  const fetchData = async (params?: string): Promise<NewsResponse | null> => {
    setLoading(true)
    if (error) {
      setError('')
    }
    const URL = !!params
      ? `https://newsapi.org/v2/everything?${params}&apiKey=19a6fe277f914d7dbf1a2e4add73f085`
      : `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=19a6fe277f914d7dbf1a2e4add73f085`
    return await fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Network response was not ok.')
      })
      .then(data => {
        setData(data)
        setLoading(false)
        return data
      })
      .catch(error => {
        setError(error.message)
        setLoading(false)
      })
  }

  return { data, loading, error, fetchData }
}
