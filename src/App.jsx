import React from 'react'
import { Route, Routes } from 'react-router'
import WelcomePage from './pages/WelcomePage'
import PlayerDetails from './pages/PlayerDetails'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/playerdetails' element={<PlayerDetails />} />
      </Routes>
    </>
  )
}

export default App
