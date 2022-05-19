import React, { useEffect } from 'react'
import { NewsContainer, Provider, useNews, NewsCard } from 'news-portal'
import Grid from '@mui/material/Grid/Grid'
import Stack from '@mui/material/Stack'

const Component: React.FC = () => {
  return (
    <Provider>
      <Grid container spacing={4}>
        <Grid item xs={7}>
          <NewsContainer />
        </Grid>
        <Grid item xs={3}>
          <LeftList />
        </Grid>
      </Grid>
    </Provider>
  )
}

const LeftList = () => {
  const { news, getNews } = useNews()
  useEffect(() => {
    ;(async () => {
      await getNews()
    })()
  }, [])

  return (
    <Stack spacing={1}>
      {!!news &&
        news?.length > 0 &&
        news?.map((items, index) => <NewsCard key={index} data={items} />)}
    </Stack>
  )
}

export default Component
