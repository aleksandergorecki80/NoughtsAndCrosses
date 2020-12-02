import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const GameOver = ({ showModal, closeModalResetGame }) => {
    console.log(showModal, 'showModal')
    return (
        <div>
            { showModal && (
                <motion.div className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="modal"
                    >
                        <Link to="/select">
                            <button onClick={closeModalResetGame}>OK</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
</div>

    );
}

export default GameOver;