
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './assets/pages/homePage'
import AboutUsPage from './assets/pages/AboutUsPage'
import ContactPage from './assets/pages/ContactPage'
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
