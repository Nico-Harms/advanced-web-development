
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './pages/homePage'
import AboutUsPage from './pages/AboutUsPage'
import ContactPage from './pages/ContactPage'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
