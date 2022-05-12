import React from 'react'
import { NewsContainer, Provider } from 'news-portal'

const Component: React.FC = () => {
  return (
    <Provider>
      <NewsContainer />
    </Provider>
  )
}

export default Component
