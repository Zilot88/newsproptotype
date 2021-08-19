import React, { useContext } from "react";
import * as S from "./styles";
import { NewsTest, useWeatherContext, WeatherProvider } from "news-independent";

const Temp2 = React.memo(() => {
  const { weatherData } = useWeatherContext();
  console.log('render2');
  return (
    <div style={{color: '#fff'}}>
      {JSON.stringify(weatherData)}
    </div>
  );
});

const Component: React.FC = () => {
  console.log('render');
  return (
    <div style={S.page}>
      <WeatherProvider>
        <span>
        <Temp2 />
        </span>
      </WeatherProvider>
      <NewsTest />
    </div>
  );
};

export default Component;
