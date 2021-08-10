import { useEffect, useState } from 'react';

// Hook
export const useWeatherApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };
  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    async function fetchData() {
      setLoading(true);
      if (error) {
        setError('');
      }
      const res = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          'https://xkcd.com/info.0.json',
        )}`,
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then((data) => {
          setData(data.contents);
          setLoading(false);
        });
      console.log(res);
    }

    fetchData().catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  });

  return { data, loading, error };
};
