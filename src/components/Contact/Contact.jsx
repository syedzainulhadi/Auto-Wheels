import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../../config/emailjs'
import {
  RiPhoneLine, RiMapPinLine, RiTimeLine,
  RiSendPlaneLine, RiCheckLine, RiErrorWarningLine
} from 'react-icons/ri'
import './Contact.css'

const services = [
  'Engine Repair', 'Transmission Repair', 'Oil Change', 'Vehicle Diagnostics',
  'Electrical Repairs', 'Battery Services', 'Air Conditioning',
  'Body Repairs', 'Car Painting', 'Wheel Alignment', 'Brakes',
  'Suspension Repair', 'Vehicle Restoration', 'Vehicle Modifications', 'Other',
]

export default function Contact() {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', message: '',
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      )
      setStatus('success')
      setFormData({ name: '', phone: '', email: '', service: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Book a Service</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Ready to bring your vehicle in? Fill out the form or call us directly — we'll get back to you promptly.
          </p>
        </motion.div>

        <div className="contact__layout">
          {/* Info Panel */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact__info-title">Auto Wheels</h3>
            <p className="contact__info-sub">Mahindra Authorised Service Station</p>

            <div className="contact__info-items">
              <div className="contact__info-item">
                <div className="contact__info-icon"><RiPhoneLine size={20} /></div>
                <div>
                  <div className="contact__info-label">Phone</div>
                  <a href="tel:9765676721" className="contact__info-value">9765676721</a>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon"><RiMapPinLine size={20} /></div>
                <div>
                  <div className="contact__info-label">Location</div>
                  <div className="contact__info-value">Curchorem, Goa</div>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon"><RiTimeLine size={20} /></div>
                <div>
                  <div className="contact__info-label">Working Hours</div>
                  <div className="contact__info-value">Mon – Sat: 9:00 AM – 7:00 PM</div>
                  <div className="contact__info-note">Sunday: By Appointment</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name <span className="form-required">*</span></label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number <span className="form-required">*</span></label>
                  <input
                    id="phone" name="phone" type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  {/* Service is optional — no required attribute */}
                  <label htmlFor="service">Service Required</label>
                  <select
                    id="service" name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service…</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message"
                  rows={4}
                  placeholder="Describe your issue or what you need…"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="contact__submit btn-primary"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <><span className="spinner" /> Sending…</>
                ) : (
                  <><RiSendPlaneLine size={18} /> Send Message</>
                )}
              </button>

              {status === 'success' && (
                <motion.div className="form-status form-status--success"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <RiCheckLine size={18} />
                  Message sent! We'll be in touch shortly.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div className="form-status form-status--error"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <RiErrorWarningLine size={18} />
                  Something went wrong. Please try again or call us directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}