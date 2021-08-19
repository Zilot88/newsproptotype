import React, { ReactElement, useEffect, useState } from 'react'

import createCtx from './utils/createCtx'
import { Props, WeatherContext, WeatherState } from './types'
import { useWeatherApi } from './useWeatherApi'

const [useCtx, Provider] = createCtx<WeatherContext>()

export const initialState: WeatherState = {
  loading: false,
  coord: undefined,
  weather: undefined,
  base: '',
  main: undefined,
  visibility: 0,
  wind: undefined,
  clouds: undefined,
  dt: 0,
  sys: undefined,
  timezone: 0,
  id: 0,
  name: '',
  cod: 0,
}

function WeatherProvider(props: Props): ReactElement {
  const [weatherData, setWeatherData] = useState<WeatherState>(initialState)
  const { fetchData } = useWeatherApi()

  useEffect(() => {
    ;(async () => {
      const res: WeatherState | null = await fetchData('Kiev')
      if (!res) {
        return
      }
      setWeatherData(prev => ({
        ...prev,
        ...res,
      }))
    })()
  }, [fetchData])

  const setContextData = (key: keyof WeatherState, data: any) => {
    setWeatherData((prev: any) => ({
      ...prev,
      [key]: data,
    }))
  }

  const callAPI = {
    setContextData,
  }

  return (
    <Provider
      value={{
        weatherData,
        callAPI,
      }}
    >
      {props.children}
    </Provider>
  )
}

export { useCtx as useWeatherContext, WeatherProvider }
