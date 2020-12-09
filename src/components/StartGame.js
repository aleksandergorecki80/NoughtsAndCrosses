import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Box from '@material-ui/core/Box';

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
        // scale: [1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1],
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.5,
            //   yoyo: Infinity
            yoyo: 3
        }
    }
}


const StartGame = (props) => {
    return (
        <motion.div
            variants={buttonsVarients}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <Box>
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
                >
                    About
                 </button>
            </Box>
        </motion.div>
    );
}

const mapStateToProps = (state) => {
    return {
        isRun: state.game.isRun
    }
}

export default connect(mapStateToProps)(StartGame);