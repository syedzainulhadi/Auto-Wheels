import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { RiCalendarLine, RiToolsLine, RiPhoneLine } from 'react-icons/ri'
// import logo from '../../assets/logo/autowheels-logo.png'
import heroBg from '../../assets/images/hero-workshop.jpg'
import './Hero.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function Hero() {
  const [showNumber, setShowNumber] = useState(false)

  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero__overlay" />
      <div className="hero__grid" />

      <div className="hero__content container">

        {/* <motion.div className="hero__logo-wrap" {...fadeUp(0.1)}>
          <img src={logo} alt="Auto Wheels" className="hero__logo" />
        </motion.div> */}

        <motion.span className="hero__eyebrow" {...fadeUp(0.2)}>
          Specialist in Mahindra & Other Brands · Curchorem, Goa
        </motion.span>

        <motion.h1 className="hero__title" {...fadeUp(0.3)}>
          AUTO <span className="hero__title-accent">WHEELS</span>
        </motion.h1>

        <motion.p className="hero__tagline" {...fadeUp(0.4)}>
          Complete Automotive Repairs, Restoration & Custom Solutions
        </motion.p>

        <motion.p className="hero__desc" {...fadeUp(0.5)}>
          From routine servicing to complete vehicle restoration, Auto Wheels provides
          end-to-end automotive solutions under one roof.
        </motion.p>

        <motion.div className="hero__ctas" {...fadeUp(0.6)}>
          <button className="btn-primary" onClick={() => scrollTo('#contact')}>
            <RiCalendarLine size={18} />
            Book Service
          </button>

          <button className="btn-outline" onClick={() => scrollTo('#services')}>
            <RiToolsLine size={18} />
            View Services
          </button>

          {/* Call Now — reveals number on click */}
          {!showNumber ? (
            <button className="hero__call-btn" onClick={() => setShowNumber(true)}>
              <RiPhoneLine size={18} />
              Call Now
            </button>
          ) : (
            <motion.a
              href="tel:9765676721"
              className="hero__call-number"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            >
              <RiPhoneLine size={18} />
              9765676721
            </motion.a>
          )}
        </motion.div>

        <motion.div className="hero__badges" {...fadeUp(0.7)}>
          <div className="hero__badge">
            <span className="hero__badge-num">1000+</span>
            <span className="hero__badge-label">Vehicles Serviced</span>
          </div>
          <div className="hero__badge-divider" />
          <div className="hero__badge">
            <span className="hero__badge-num">10+</span>
            <span className="hero__badge-label">Years Experience</span>
          </div>
          <div className="hero__badge-divider" />
          <div className="hero__badge">
            <span className="hero__badge-num">4.6★</span>
            <span className="hero__badge-label">Google Rating</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}