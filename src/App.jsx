import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Stats from './components/Stats/Stats'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Gallery from './components/Gallery/Gallery'
import Reviews from './components/Reviews/Reviews'
import Contact from './components/Contact/Contact'
import Map from './components/Map/Map'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Projects />
        <Gallery />
        <Reviews />
        <Contact />
        <Map />
      </main>
      <Footer />
    </>
  )
}

export default App