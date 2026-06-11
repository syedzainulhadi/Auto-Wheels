import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Projects.css'

// You have 3 images — import them directly
import beforeCrash from '../../assets/projects/project1-before.jpg'
import afterRepair from '../../assets/projects/project1-after.jpg'
import beforeAfterCombined from '../../assets/projects/project2-before.jpg'

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Our Work</span>
          <h2 className="section-title">Restoration Projects</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Real results from our workshop — vehicles brought back to life through expert restoration and repair.
          </p>
        </motion.div>

        {/* Main featured project — full width before/after side by side */}
        <motion.div
          className="project-featured"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="project-featured__label">
            <span className="project-tag">Featured Restoration</span>
            <h3 className="project-featured__title">Mahindra Thar — Accident to Road-Ready</h3>
            <p className="project-featured__desc">
              Complete front-end accident repair — chassis straightening, bodywork, panel replacement, 
              paint refinishing, and mechanical restoration. Vehicle returned to factory condition.
            </p>
          </div>

          <div className="project-featured__images">
            <div className="project-featured__img-wrap">
              <span className="project-img-label project-img-label--before">BEFORE</span>
              <img src={beforeCrash} alt="Mahindra Thar before restoration" />
            </div>
            <div className="project-featured__arrow">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6 16H26M26 16L18 8M26 16L18 24" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="project-featured__img-wrap">
              <span className="project-img-label project-img-label--after">AFTER</span>
              <img src={afterRepair} alt="Mahindra Thar after restoration" />
            </div>
          </div>
        </motion.div>

        {/* Combined photo card */}
        <motion.div
          className="project-combined"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="project-combined__text">
            <span className="project-tag">Side-by-Side Comparison</span>
            <h3 className="project-combined__title">Before & After — Body Repair</h3>
            <p className="project-combined__desc">
              A direct side-by-side comparison showing the extent of damage and the quality of the finished restoration work carried out at Auto Wheels.
            </p>
            <ul className="project-combined__points">
              <li>Front bumper & panel replacement</li>
              <li>Structural repair & alignment</li>
              <li>Full respray & finish</li>
            </ul>
          </div>
          <div className="project-combined__img-wrap">
            <img src={beforeAfterCombined} alt="Before and after comparison" />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="projects__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>Have a vehicle that needs restoration or repair?</p>
          <button
            className="btn-primary"
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
            }}
          >
            Get a Free Assessment
          </button>
        </motion.div>

      </div>
    </section>
  )
}