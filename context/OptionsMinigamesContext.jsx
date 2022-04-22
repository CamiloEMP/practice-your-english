import { createContext, useState } from 'react'

export const ContextOptions = createContext({})

export const ContextOptionsProvider = ({ children }) => {
  const [options, setOptions] = useState({})

  return (
    <ContextOptions.Provider value={{ options, setOptions }}>{children}</ContextOptions.Provider>
  )
}
