import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './PAGES/Home/Home'
import Login from './PAGES/Login/Login'
import Player from './PAGES/Player/Player'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/player/:id" element={<Player />} />
    </Routes>
  )
}

export default App
 