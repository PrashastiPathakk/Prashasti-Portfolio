import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Projects from './components/projects'
import About from './components/about'
import Experience from './components/experience'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
