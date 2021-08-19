import React from "react";
import * as S from "./styles";
import { NewsTest, useWeatherContext, WeatherProvider } from "news-independent";

const Temp2 = () => {
  const { weatherData } = useWeatherContext();
  console.log(weatherData);
  return (
    <div style={{color: '#fff'}}>
      <NewsTest />
    </div>
  );
};

const Component: React.FC = () => {
  return (
    <div style={S.page}>
      <WeatherProvider>
        <span>
        <Temp2 />
        </span>
      </WeatherProvider>
    </div>
  );
};

export default Component;
