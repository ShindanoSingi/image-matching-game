import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import GamePage from './GamePage'

const App = () => {
  return (
    <div className="container">
      <header className="header">Image Matching Game</header>
      <Routes>
        <Route path="/" element={<GamePage />} />
        <Route path="error" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
