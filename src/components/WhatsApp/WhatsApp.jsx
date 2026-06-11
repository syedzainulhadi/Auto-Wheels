// import React, { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { RiWhatsappLine, RiCloseLine } from 'react-icons/ri'
// import './WhatsApp.css'

// export default function WhatsApp() {
//   const [tooltip, setTooltip] = useState(false)

//   return (
//     <div className="whatsapp-fab">
//       <AnimatePresence>
//         {tooltip && (
//           <motion.div
//             className="whatsapp-fab__tooltip"
//             initial={{ opacity: 0, scale: 0.8, x: 10 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             exit={{ opacity: 0, scale: 0.8, x: 10 }}
//             transition={{ duration: 0.2 }}
//           >
//             <div className="whatsapp-fab__tooltip-name">Auto Wheels</div>
//             <div className="whatsapp-fab__tooltip-msg">Chat with us on WhatsApp</div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.a
//         href="https://wa.me/919765676721"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="whatsapp-fab__btn"
//         aria-label="Chat on WhatsApp"
//         onMouseEnter={() => setTooltip(true)}
//         onMouseLeave={() => setTooltip(false)}
//         initial={{ scale: 0, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ delay: 2, type: 'spring', stiffness: 200 }}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <RiWhatsappLine size={28} />
//         <span className="whatsapp-fab__ping" />
//       </motion.a>
//     </div>
//   )
// }