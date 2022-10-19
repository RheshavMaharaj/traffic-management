// import React from 'react'
// import logo from './logo.svg'
import "./css/Utils.css"
import Homepage from "./components/Homepage"
import { Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalState"
import NotFound from "./components/NotFound"
import ViewCongestion from "./components/ViewCongestion"
import "./css/App.css"

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/view_congestion" element={<ViewCongestion />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalProvider>
    </div>
  )
}

export default App
