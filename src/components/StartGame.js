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
    },


}));
///

/// BUTTONS SECTION


const StartGame = (props) => {
    const classes = useStyles();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
        >
            <Box className={classes.buttonsContainer}>
                <Link to="/select">
                    <Button
                        variant="outlined"
                        size="large"
                        color="primary"
                        className={classes.button}
                    // onClick={onClickHandle}
                    >
                        START
            </Button>
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