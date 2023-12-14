
import './App.css'
import Navigation from './components/semantic/Navigation'
import HomePage from './pages/HomePage'

import ContactPage from './pages/ContactPage'
import AdminLoginPage from './pages/adminpages/AdminLoginPage'
import AdminPage from './pages/adminpages/AdminPage'
import { Route, Routes } from 'react-router-dom'
import AdminCoursePage from './pages/adminpages/AdminCoursePage'
import Footer from './components/semantic/Footer'
import CoursePage from './pages/CoursePage'
import TimelinePage from './pages/TimelinePage'
import SpecificCoursePage from './pages/SpecificCoursePage'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function App() {

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admincourse" element={<AdminCoursePage />} />
        <Route path="/historie" element={<TimelinePage />} />
        <Route path="/kurser" element={<CoursePage />} />
        <Route path="/kurser/:courseId" element={<SpecificCoursePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
