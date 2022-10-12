import "./css/App.css"
import Homepage from "./components/Homepage"
import { Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"
import ViewCongestion from "./components/ViewCongestion"
import { GlobalProvider } from "./context/GlobalState"

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
