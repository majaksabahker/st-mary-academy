import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Academics from './components/Academics'
import Admission from './components/Admission'
import NewsEvents from './components/NewsEvents'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FaqPage from './components/FaqPage'

function App() {
  const location = useLocation()

  useEffect(() => {
    const els = document.querySelectorAll('main section')

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('reveal--visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    els.forEach((el) => {
      el.classList.add('reveal')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#333333]">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <Routes>
          <Route
            path="/"
            element={
              <div className="space-y-10">
                <Home />
                <About />
                <Academics />
                <Admission />
                <NewsEvents />
                <Gallery />
                <Contact />
              </div>
            }
          />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </main>
      <Footer />
      <a
        href="https://wa.me/211924879393"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SMAK admissions on WhatsApp"
        className="fixed bottom-4 right-4 z-50 rounded-full bg-[#25D366] px-5 py-4 text-base font-bold text-white shadow-lg transition hover:scale-105 hover:bg-[#1EBE5D]"
      >
        WhatsApp
      </a>
    </div>
  )
}

export default App
