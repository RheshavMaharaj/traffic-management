// import React from 'react'
// import logo from './logo.svg'
import "./css/Utils.css"
import "./App.css"
import Homepage from "./components/Homepage"
import { Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"
import ViewCongestion from "./components/ViewCongestion"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/view_congestion" element={<ViewCongestion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
