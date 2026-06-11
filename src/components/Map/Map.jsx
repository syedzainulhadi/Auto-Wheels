import React from 'react'
import { motion } from 'framer-motion'
import { RiMapPinLine } from 'react-icons/ri'
import './Map.css'

export default function Map() {
  return (
    <section className="map-section section-sm">
      <div className="container">
        <motion.div
          className="map-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <RiMapPinLine size={20} className="map-section__pin" />
          <div>
            <h3 className="map-section__title">Find Us in Curchorem, Goa</h3>
            <p className="map-section__sub">Auto Wheels · Mahindra Service Station</p>
          </div>
        </motion.div>

        <motion.div
          className="map-section__embed"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/*
            =====================================================
            IMPORTANT: Replace the src below with your actual
            Google Maps Embed URL for Auto Wheels, Curchorem Goa.

            To get your embed URL:
            1. Open Google Maps and search "Auto Wheels Curchorem Goa"
            2. Click Share → Embed a map → Copy HTML
            3. Paste only the src="..." value below
            =====================================================
          */}
          <iframe
  title="Auto Wheels Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.214804535987!2d74.10257999999999!3d15.256077300000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfac60e1142e65%3A0x6211496f36bb2ef5!2sAUTO%20WHEELS%20.mahindra%20service%20station!5e0!3m2!1sen!2sin!4v1781111285268!5m2!1sen!2sin"
  width="100%"
  height="420"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
        </motion.div>
      </div>
    </section>
  )
}