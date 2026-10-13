import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer.jsx'
import WhatsAppButton from './Components/WhatsAppButton'
import Home from './pages/Home.jsx'
import About from './pages/About'
import Services from './pages/ServicePage'
import Projects from './pages/Projects'
import Notices from './pages/Notices'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="*"
          element={
            <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-[#082F49]">
                  Page Not Found
                </h1>

                <p className="mt-3 text-slate-600">
                  The page you are looking for does not exist.
                </p>

                <Link
                  to="/"
                  className="mt-5 inline-block rounded-lg bg-[#075985] px-5 py-2.5 text-sm font-bold text-white"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          }
        />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App