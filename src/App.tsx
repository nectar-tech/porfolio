import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NeonOdysseyPage from './pages/NeonOdysseyPage'
import AcademicsPage from './pages/AcademicsPage'
import RimonPage from './pages/RimonPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/neon-odyssey" element={<NeonOdysseyPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/rimon" element={<RimonPage />} />
      </Routes>
    </BrowserRouter>
  )
}
