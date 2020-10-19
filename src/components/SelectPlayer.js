import React from 'react';
import { connect } from 'react-redux';
import { selectPlayer, turnGameOn } from '../actions/GameActions';
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

const SelectPlayer = (props) => {
    const classes = useStyle();
    const onSelectPlayer = (event) => {
        props.dispatch(selectPlayer(event.target.value));
        props.dispatch(turnGameOn());
        props.handleClose();
    }
    return (
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
                    <Typography className={classes.basicTileStyles}>
                    <button value="X" onClick={onSelectPlayer}>X</button>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.basicTileStyles}>
                        <button value="O" onClick={onSelectPlayer}>O</button>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default connect()(SelectPlayer);