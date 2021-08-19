import { useEffect, useState } from 'react'

import { WeatherState, WeatherType } from './types'
import { initialState } from './useContext'

// Hook
export const useWeatherApi = (params?: boolean) => {
  const [data, setData] = useState<WeatherType>(initialState)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState('')

  const fetchData = async (name?: string): Promise<WeatherState | null> => {
    if (!name) {
      return null
    }
    setLoading(true)
    if (error) {
      setError('')
    }
    const URL =
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      name +
      '&lang=ru&units=metric&appid=b1b35bba8b434a28a0be2a3e1071ae5b'
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
  useEffect(() => {
    if (!params) {
      ;(async () => {
        const res: WeatherState | null = await fetchData('Kiev')
        if (!res) {
          return
        }
      })()
    }
  }, [fetchData])

  return { data, loading, error, fetchData }
}
