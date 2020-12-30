import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Box from '@material-ui/core/Box';
import About from './About';

const buttonsVarients = {
    hidden: {
        x: '100vw',
    },
    visible: {
        x: 0,
        transition: { type: 'spring', stiffness: 120 }
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
}

const startButtonVarients = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.5,
            yoyo: 3
        }
    }
}



const StartGame = (props) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <motion.div
            variants={buttonsVarients}
            initial='hidden'
            animate='visible'
            exit='exit'
            className="container start-game"
        >
            <Box className="container start-game">
                <Link to="/select">
                    <motion.button
                        variant="outlined"
                        size="large"
                        color="primary"
                        variants={startButtonVarients}
                        whileHover="hover"
                    >
                        START
            </motion.button>
                </Link>
                <button
                    variant="outlined"
                    size="large"
                    color="primary"
                    onClick={()=>setShowModal(true)}
                >
                    About
                 </button>
            </Box>
            <About showModal={showModal} setShowModal={setShowModal}/>
        </motion.div>
    );
}

const mapStateToProps = (state) => {
    return {
        isRun: state.game.isRun
    }
}

export default connect(mapStateToProps)(StartGame);