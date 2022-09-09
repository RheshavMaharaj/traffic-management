import React from 'react'
import logo from './logo.svg'
import './App.css'
import Homepage from './components/Homepage'
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
