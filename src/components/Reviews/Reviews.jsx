import React from 'react'
import { motion } from 'framer-motion'
import { RiStarFill, RiGoogleLine } from 'react-icons/ri'
import './Reviews.css'

const reviews = [
  {
    name: 'Viraj Prabhudessai',
    rating: 5,
    date: '3 years ago',
    text: 'The comes as a saviour to the local public since the time the dealer in verna is shut. This guy arranges all the spares from the genuine suppliers and maintains the vehicles well.',
    initials: 'VP',
    color: '#2563EB',
  },
  {
    name: 'Aditya Naik Moroscar',
    rating: 5,
    date: '6 years ago',
    text: 'Perfect automobile service',
    initials: 'AN',
    color: '#10B981',
  },
  {
    name: 'Sanjay Dessai',
    rating: 4,
    date: 'November 2023',
    text: 'Very professional setup. They used modern diagnostic equipment to identify the exact problem with my suspension. Repairs were done neatly and the vehicle drives much better now. Good value for money.',
    initials: 'SD',
    color: '#F59E0B',
  },
  {
    name: 'Marcus D\'Souza',
    rating: 5,
    date: 'September 2023',
    text: 'Trusted Auto Wheels with a complete restoration of my vintage jeep. The transformation was beyond what I expected. Their attention to detail and passion for vehicles really shows in the final result.',
    initials: 'MD',
    color: '#EC4899',
  },
]

function Stars({ count }) {
  return (
    <div className="review__stars">
      {Array.from({ length: 5 }, (_, i) => (
        <RiStarFill key={i} size={14} className={i < count ? 'star-filled' : 'star-empty'} />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Customer Feedback</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="divider" />
          <div className="reviews__rating-summary">
            <div className="reviews__rating-score">4.6</div>
            <div>
              <Stars count={5} />
              <p className="reviews__rating-label">28 Google Reviews · Curchorem, Goa</p>
            </div>
          </div>
        </motion.div>

        <div className="reviews__grid">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              className="review-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="review-card__top">
                <div className="review-card__avatar" style={{ background: r.color }}>
                  {r.initials}
                </div>
                <div>
                  <div className="review-card__name">{r.name}</div>
                  <div className="review-card__date">{r.date}</div>
                </div>
                <div className="review-card__google">
                  <RiGoogleLine size={18} />
                </div>
              </div>
              <Stars count={r.rating} />
              <p className="review-card__text">"{r.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}