import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    // button styles
    button: {
        margin: theme.spacing(1),
        padding: '20px 50px',
        fontSize: '2rem',
        fontWeight: "bold"
    },
    buttonsContainer: {
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
}));
///

/// BUTTONS SECTION

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
    const classes = useStyles();

    return (
        <motion.div
            variants={buttonsVarients}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <Box className={classes.buttonsContainer}>
                <Link to="/select">
                    <motion.button
                        variant="outlined"
                        size="large"
                        color="primary"
                        className={classes.button}
                    // onClick={onClickHandle}
                        variants={startButtonVarients}
                        whileHover="hover"
                    >
                        START
            </motion.button>
                </Link>
                <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    className={classes.button}
                >
                    SAVE
      </Button>
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