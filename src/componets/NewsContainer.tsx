import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import LinearProgress from '@mui/material/LinearProgress'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

import { useNews } from '../application'
import { Provider } from '../services/store'

import NewsCard from './NewsCard'
import NewsTimeLine from './NewsTimeLine'

export const NewsContainer: React.FC = () => {
  const { news, loading, getNews } = useNews()
  useEffect(() => {
    ;(async () => {
      await getNews()
    })()
  }, [])

  return (
    <div>
      <Provider>
        <Grid container spacing={2}>
          <Grid container item xs={3} sx={{ minWidth: 320, maxHeight: 500 }}>
            <NewsTimeLine />
          </Grid>
          <Grid item xs>
            {loading ? (
              <div>
                <LinearProgress />
                <Stack spacing={1}>
                  <Skeleton variant="text" />
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" width={210} height={118} />
                </Stack>
              </div>
            ) : (
              <Stack spacing={1}>
                {!!news &&
                  news?.length > 0 &&
                  news?.map((items, index) => (
                    <NewsCard key={index} data={items} />
                  ))}
              </Stack>
            )}
          </Grid>
        </Grid>
      </Provider>
    </div>
  )
}

export default NewsContainer
