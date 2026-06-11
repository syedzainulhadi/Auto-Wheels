import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiCloseLine, RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'
import './Gallery.css'

// Only import the images you actually have placed in the folder.
// Image 1 should be your garage/shop exterior photo — it will be displayed large at the top.
// Add or remove imports below to match exactly which files you have.

import img1 from '../../assets/gallery/gallery1.jpg'
import img2 from '../../assets/gallery/gallery2.jpg'
import img3 from '../../assets/gallery/gallery3.jpg'
import img4 from '../../assets/gallery/gallery4.jpg'
import img5 from '../../assets/gallery/gallery5.jpg'
import img6 from '../../assets/gallery/gallery6.jpg'
import img7 from '../../assets/gallery/gallery7.jpg'
import img8 from '../../assets/gallery/gallery8.jpg'

// gallery1.jpg  → your garage/shop exterior (shown large at top)
// gallery2–8    → workshop, vehicles, projects etc.
// Add more imports if you have more images, or remove if you have fewer.

const images = [
  { id: 1, src: img1, alt: 'Auto Wheels — Workshop & Service Station, Curchorem Goa', featured: true },
  { id: 2, src: img2, alt: 'Auto Wheels Workshop' },
  { id: 3, src: img3, alt: 'Auto Wheels Workshop' },
  { id: 4, src: img4, alt: 'Auto Wheels Workshop' },
  { id: 5, src: img5, alt: 'Auto Wheels Workshop' },
  { id: 6, src: img6, alt: 'Auto Wheels Workshop' },
  { id: 7, src: img7, alt: 'Auto Wheels Workshop' },
  { id: 8, src: img8, alt: 'Auto Wheels Workshop' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (idx) => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((lightbox - 1 + images.length) % images.length)
  const next = () => setLightbox((lightbox + 1) % images.length)

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Our Workshop</span>
          <h2 className="section-title">Gallery</h2>
          <div className="divider" />
          <p className="section-subtitle">
            A glimpse into our workshop, vehicles we've serviced, and projects we're proud of.
          </p>
        </motion.div>

        {/* Featured shop image — full width, tall */}
        <motion.div
          className="gallery__featured"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onClick={() => openLightbox(0)}
        >
          <img src={images[0].src} alt={images[0].alt} />
          <div className="gallery__featured-overlay">
            <div className="gallery__featured-tag">Auto Wheels — Curchorem, Goa</div>
            <div className="gallery__featured-sub">Mahindra Authorised Service Station</div>
          </div>
        </motion.div>

        {/* Rest of images in grid */}
        <div className="gallery__grid">
          {images.slice(1).map((img, i) => (
            <motion.div
              key={img.id}
              className="gallery__item"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
              onClick={() => openLightbox(i + 1)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery__item-overlay">
                <span className="gallery__zoom-icon">⤢</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox__close" onClick={closeLightbox}>
              <RiCloseLine size={28} />
            </button>
            <button className="lightbox__nav lightbox__nav-prev"
              onClick={(e) => { e.stopPropagation(); prev() }}>
              <RiArrowLeftLine size={22} />
            </button>
            <motion.div
              className="lightbox__img-wrap"
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={images[lightbox].src} alt={images[lightbox].alt} />
              <div className="lightbox__caption">{lightbox + 1} / {images.length}</div>
            </motion.div>
            <button className="lightbox__nav lightbox__nav-next"
              onClick={(e) => { e.stopPropagation(); next() }}>
              <RiArrowRightLine size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}