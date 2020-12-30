import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  transition: { delay: 0.5 }
}

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 }
  },
}

const GameOver = ({ setShowModal, showModal }) => {
  return (
    <AnimatePresence>
      { showModal && (
        <motion.div className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal"
            variants={modal}
            initial="hidden"
            animate="visible"
          >
            <h1>Noughts & Crosses </h1>
            <p>Version 1.0</p>
            <p>Created by Aleksander Gorecki</p>
            <p>a.gorecki1980@gmail.com</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default GameOver;