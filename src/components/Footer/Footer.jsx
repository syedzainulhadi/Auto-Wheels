import React from 'react'
import { motion } from 'framer-motion'
import {
  RiPhoneLine,
  RiMapPinLine,
  RiTimeLine,
  RiFacebookLine,
  RiInstagramLine,
  RiWhatsappLine,
  RiYoutubeLine
} from 'react-icons/ri'
import logo from '../../assets/logo/autowheels-logo.png'
import './Footer.css'

const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Restoration Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Customer Reviews', href: '#reviews' },
  { label: 'Contact Us', href: '#contact' },
]

const serviceLinks = [
  'Engine Repair',
  'Vehicle Diagnostics',
  'Car Painting',
  'Body Restoration',
  'Wheel Alignment',
  'Vehicle Modifications',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__main container">

        {/* Brand */}
        <motion.div
          className="footer__brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={logo}
            alt="Auto Wheels"
            className="footer__logo"
          />

          <p className="footer__brand-desc">
            Complete Automotive Repairs, Restoration & Custom Solutions.
            Mahindra Authorised Service Station serving Curchorem, Goa and surrounding areas.
          </p>

          <div className="footer__socials">
            <a
              href="https://wa.me/919765676721"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <RiWhatsappLine size={20} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <RiFacebookLine size={20} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <RiInstagramLine size={20} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <RiYoutubeLine size={20} />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="footer__col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="footer__col-title">Quick Links</h4>

          <ul className="footer__links">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(link.href)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          className="footer__col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h4 className="footer__col-title">Our Services</h4>

          <ul className="footer__links">
            {serviceLinks.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo('#services')
                  }}
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="footer__col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="footer__col-title">Contact Info</h4>

          <ul className="footer__contact-items">
            <li>
              <RiPhoneLine size={16} />
              <a href="tel:9765676721">9765676721</a>
            </li>

            <li>
              <RiMapPinLine size={16} />
              <span>Curchorem, Goa, India</span>
            </li>

            <li>
              <RiTimeLine size={16} />
              <span>Mon–Sat: 9AM – 7PM</span>
            </li>
          </ul>

          <a
            href="https://wa.me/919765676721"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__whatsapp btn-primary"
          >
            <RiWhatsappLine size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">

          <p className="footer__copy">
            &copy; {year} Auto Wheels. All rights reserved. Curchorem, Goa.
          </p>

          <p className="footer__credit">
            Website Designed & Developed by{' '}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vortexa Labs
            </a>
          </p>

        </div>
      </div>
    </footer>
  )
}