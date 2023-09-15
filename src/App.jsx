import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Spot from "./pages/Spot"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Spot />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App