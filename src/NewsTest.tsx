import React from 'react';

import { useWeatherApi } from './useWeatherApi';

export const NewsTest: React.FC = () => {
  const { data, loading } = useWeatherApi();

  if (loading) {
    return <div>Loading</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};
