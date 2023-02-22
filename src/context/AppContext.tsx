import React, { useState, createContext } from 'react'

const initialState = {
  isAuthorized: false,
  userData: { email: '', password: '' },
  login: () => {},
  logout: () => {}
}

interface ContextProps {
  isAuthorized: boolean
  userData: { email: string; password: string }
  login: (body: { email: string; password: string }) => void
  logout: () => void
}

const AppContext = createContext<ContextProps>(initialState)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [userData, setUserData] = useState({ email: '', password: '' })

  const login = (body: { email: string; password: string }) => {
    setUserData(body)
    setIsAuthorized(true)
  }

  const logout = () => {
    setUserData({ email: '', password: '' })
    setIsAuthorized(false)
  }

  return (
    <AppContext.Provider value={{ isAuthorized, userData, login, logout }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
