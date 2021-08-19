import React from 'react'

import { useWeatherApi } from './useWeatherApi'

export const NewsTest: React.FC = () => {
  const { data, loading } = useWeatherApi()
  if (!data) {
    return null
  }
  const weather =
    data.weather && data.weather?.length > 0 ? data?.weather[0] : null
  if (!weather) {
    return null
  }
  const iconUrl = 'http://openweathermap.org/img/w/' + weather.icon + '.png'
  if (loading) {
    return <div>Loading</div>
  }

  return (
    <div>
      <h1>
        {weather.main} in {data.name}
        <img src={iconUrl} alt={weather.description} />
      </h1>
      <p>Current: {data.main?.temp}°С</p>
      <p>High: {data.main?.temp_max}°С</p>
      <p>Low: {data.main?.temp_min}°С</p>
      <p>Wind Speed: {data.wind?.speed} м/с</p>
    </div>
  )
}

export default NewsTest
