import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Stats.css'

const stats = [
  { value: 1000, suffix: '+', label: 'Vehicles Serviced', desc: 'Across Goa & beyond' },
  { value: 10, suffix: '+', label: 'Years Experience', desc: 'In automotive excellence' },
  { value: 4.6, suffix: '★', label: 'Google Rating', desc: 'Trusted by customers' },
  { value: 28, suffix: '+', label: 'Customer Reviews', desc: 'Real verified feedback' },
]

function Counter({ value, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const isDecimal = value % 1 !== 0

  useEffect(() => {
    if (!inView) return
    const start = 0
    const end = value
    const steps = 60
    const increment = end / steps
    let current = start
    const interval = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(interval)
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(interval)
  }, [inView, value, duration, isDecimal])

  return (
    <span ref={ref} className="stat__value">
      {isDecimal ? count.toFixed(1) : count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="stats section-sm">
      <div className="container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Counter value={s.value} suffix={s.suffix} />
              <div className="stat__label">{s.label}</div>
              <div className="stat__desc">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}