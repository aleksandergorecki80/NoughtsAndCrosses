import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPlayer, turnGameOn } from '../actions/GameActions';
import { Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';


const useStyle = makeStyles((theme) => ({
    basicTileStyles: {
        textAlign: 'center',
        maxHeight: '100px',
        height: '100px',
        fontSize: '70px'
    }
})
)

const buttonsVarients = {
    hidden: {
        x: '100vw',
    },
    visible: {
        x: 0,
        transition: { type: 'spring', stiffness: 120 }
    }
}

const SelectPlayer = (props) => {
    const classes = useStyle();
    const onSelectPlayer = (event) => {
        props.dispatch(selectPlayer(event.target.value));
        props.dispatch(turnGameOn());
        // props.handleClose();
    }
    return (
        <motion.div
            variants={buttonsVarients}
            initial='hidden'
            animate='visible'
        >
            <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={1}
            >
                <Grid item>Select player</Grid>
                <Grid item container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={5}
                >
                    <Grid item>
                        <Link to="/game">
                            <Typography className={classes.basicTileStyles}>
                                <button value="X" onClick={onSelectPlayer}>X</button>
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/game">
                            <Typography className={classes.basicTileStyles}>
                                <button value="O" onClick={onSelectPlayer}>O</button>
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </motion.div>
    )
};

export default connect()(SelectPlayer);