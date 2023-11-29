
import './App.css'
import Navigation from './components/semantic/Navigation'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import ContactPage from './pages/ContactPage'
import AdminLoginPage from './pages/adminpages/AdminLoginPage'
import AdminPage from './pages/adminpages/AdminPage'
import { Route, Routes } from 'react-router-dom'
import AdminCoursePage from './pages/adminpages/AdminCoursePage'

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
        <Route path="/admincourse" element={<AdminCoursePage />} />
      </Routes>
    </>
  )
}

export default App
