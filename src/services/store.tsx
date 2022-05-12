import React, { useContext, useState } from 'react'

const StoreContext = React.createContext<any>({})
export const useStore = () => useContext(StoreContext)

export const Provider: React.FC = ({ children }) => {
  const [news, setNews] = useState([])

  const value = {
    news,
    updateNews: setNews,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
