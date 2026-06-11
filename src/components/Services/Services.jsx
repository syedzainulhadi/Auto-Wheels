import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiSettings3Line,
  RiLightbulbLine,
  RiToolsLine,
  RiCarLine
} from 'react-icons/ri'
import './Services.css'

const categories = [
  {
    id: 'mechanical',
    icon: <RiSettings3Line size={20} />,
    label: 'Mechanical',
    color: '#2563EB',
    services: [
      'Engine Repair',
      'Transmission Repair',
      'Oil Change',
      'Vehicle Diagnostics',
      'General Repairs & Maintenance',
    ],
  },
  {
    id: 'electrical',
    icon: <RiLightbulbLine size={20} />,
    label: 'Electrical',
    color: '#F59E0B',
    services: ['Electrical Repairs', 'Battery Services'],
  },
  {
    id: 'ac',
    icon: <RiToolsLine size={20} />,
    label: 'Air Conditioning',
    color: '#06B6D4',
    services: [
      'Air Conditioning Repair',
      'Re-Gas / Recharge',
      'Air & Cabin Filter Replacement',
    ],
  },
  {
    id: 'body',
    icon: <RiCarLine size={20} />,
    label: 'Body & Paint',
    color: '#EC4899',
    services: [
      'Body Repairs',
      'Body & Trim',
      'Chassis Repair',
      'Car Painting',
      'Auto Glass Repair',
    ],
  },
  {
    id: 'suspension',
    icon: <RiToolsLine size={20} />,
    label: 'Steering & Suspension',
    color: '#10B981',
    services: [
      'Wheel Alignment',
      'Brakes',
      'Steering Repair',
      'Suspension Repair',
    ],
  },
  {
    id: 'restoration',
    icon: <RiToolsLine size={20} />,
    label: 'Restoration & Custom',
    color: '#F97316',
    services: [
      'Vehicle Restoration',
      'Vehicle Modifications',
      'Complete Rebuild Projects',
    ],
  },
]

export default function Services() {
  const [active, setActive] = useState('mechanical')
  const activeCategory = categories.find(c => c.id === active)

  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Comprehensive automotive solutions across all systems — from a quick oil change to a complete vehicle rebuild.
          </p>
        </motion.div>

        <div className="services__tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`services__tab${active === cat.id ? ' active' : ''}`}
              onClick={() => setActive(cat.id)}
              style={{ '--cat-color': cat.color }}
            >
              <span className="services__tab-icon">{cat.icon}</span>
              <span className="services__tab-label">{cat.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="services__list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <div className="services__category-header">
              <div
                className="services__category-icon"
                style={{
                  color: activeCategory.color,
                  background: `${activeCategory.color}18`,
                  borderColor: `${activeCategory.color}40`
                }}
              >
                {activeCategory.icon}
              </div>

              <div>
                <div className="services__category-tag">Service Category</div>
                <h3 className="services__category-title">
                  {activeCategory.label}
                </h3>
              </div>
            </div>

            <div className="services__cards">
              {activeCategory.services.map((s, i) => (
                <motion.div
                  key={s}
                  className="service-card"
                  style={{ '--cat-color': activeCategory.color }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <div className="service-card__dot" />
                  <span className="service-card__name">{s}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}