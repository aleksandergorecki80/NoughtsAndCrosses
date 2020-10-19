import React from 'react';
import { connect } from 'react-redux';
import { resetGame } from '../actions/GameActions';
import { Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const useStyle = makeStyles((theme) => ({
    basicTileStyles: {
        textAlign: 'center',
        maxHeight: '100px',
        height: '100px',
        fontSize: '70px'
    }
})
)

const ResetGame = (props) => {
    const classes = useStyle();
    const onResetGame = () => {
        props.dispatch(resetGame());
        props.handleClose();
    }
    return (
        <Grid container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}
        >
            <Grid item>Game is not finished.</Grid>
                <Grid item>
                    <Typography className={classes.basicTileStyles}>
                        <button onClick={onResetGame}>Reset</button>
                    </Typography>
                </Grid>
        </Grid>
    )
};

export default connect()(ResetGame);