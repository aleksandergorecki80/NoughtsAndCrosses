import React from 'react';
import { connect } from 'react-redux';
import { turnGameOn } from '../actions/GameActions';
import { resetGame } from '../actions/GameActions';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import Modal from './Modal';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        padding: '20px 50px',
        fontSize: '2rem',
        fontWeight: "bold"
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px'
    }
}));

const ControlButtons = (props) => {
    const classes = useStyles();
    const onTurnOnOrResetGame = () => {
       !props.isRun ? props.dispatch(turnGameOn()) : props.dispatch(resetGame());
    }
    return (
        <Box className={classes.buttonsContainer}>
                            <Modal />
            <Button 
                variant="outlined" 
                size="large" 
                color="primary" 
                className={classes.button}
                onClick={onTurnOnOrResetGame}
                >
                {!props.isRun ? 'START' : 'RESET'}
                
            </Button>
            <Button 
                variant="outlined" 
                size="large" 
                color="primary" 
                className={classes.button}
                >
                SAVE
            </Button>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        isRun: state.game.isRun
    }
}

export default connect(mapStateToProps)(ControlButtons);