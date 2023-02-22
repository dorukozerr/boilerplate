import React, { useState, useContext } from 'react'
import AppContext from './context/AppContext'

const App = () => {
  const { isAuthorized, userData, login, logout } = useContext(AppContext)

  return (
    <main>
      {isAuthorized ? (
        <>
          <h1>Authorized</h1>
          <h2>UserData</h2>
          <div>{JSON.stringify(userData)}</div>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Not Authorized</h2>
          <button
            onClick={() => {
              login({ email: 'test@mail.com', password: 'testPW' })
            }}>
            Login
          </button>
        </>
      )}
    </main>
  )
}

export default App
