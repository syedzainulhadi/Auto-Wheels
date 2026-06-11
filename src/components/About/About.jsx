import React from 'react'
import { motion } from 'framer-motion'
import {
  RiUserStarLine, RiShieldCheckLine, RiToolsLine,
  RiDashboard3Line, RiHeartLine
} from 'react-icons/ri'
import './About.css'

const features = [
  {
    icon: <RiUserStarLine size={28} />,
    title: 'Experienced Technicians',
    desc: 'Our certified team brings years of hands-on expertise across all vehicle makes and models, delivering precision every time.',
  },
  {
    icon: <RiShieldCheckLine size={28} />,
    title: 'Genuine Parts',
    desc: 'We use only OEM and manufacturer-approved parts to ensure longevity, safety, and your vehicle\'s optimal performance.',
  },
  {
    icon: <RiToolsLine size={28} />,
    title: 'Complete Restoration Expertise',
    desc: 'From classic restorations to custom builds, we transform vehicles back to their former glory — or better.',
  },
  {
    icon: <RiDashboard3Line size={28} />,
    title: 'Modern Diagnostic Equipment',
    desc: 'Advanced computerised diagnostic tools allow us to identify and resolve issues quickly and accurately, saving you time and money.',
  },
  {
    icon: <RiHeartLine size={28} />,
    title: 'Customer Satisfaction Focus',
    desc: 'Every vehicle is treated with the same care and attention we\'d give our own. Your satisfaction drives everything we do.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title">Why Choose Auto Wheels</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Trusted by hundreds of vehicle owners across South Goa for reliable, transparent, and expert automotive care.
          </p>
        </motion.div>

        <motion.div
          className="about__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {features.map((f) => (
            <motion.div key={f.title} className="about__card" variants={cardVariants}>
              <div className="about__card-icon">{f.icon}</div>
              <h3 className="about__card-title">{f.title}</h3>
              <p className="about__card-desc">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}