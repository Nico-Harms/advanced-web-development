
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import ContactPage from './pages/ContactPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminPage from './pages/AdminPage'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  )
}

export default App
