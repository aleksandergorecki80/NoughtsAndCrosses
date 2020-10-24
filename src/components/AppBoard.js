import React from 'react';
import { connect } from 'react-redux';
import GameBoard from './GameBoard';
import { Grid, makeStyles } from '@material-ui/core';
import ControlButtons from './ControlButtons';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({

}));

const AppBoard = (props) => {
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item container>
                <Grid item xs={1} sm={2} />
                <Grid item xs={10} sm={8}>
                    <ControlButtons />
                </Grid>
                <Grid item xs={1} sm={2} />
            </Grid>
            <Grid item container
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Box>
                        <Typography>
                            { props.currentPlayer ? `${props.currentPlayer} is playing now` : ''} 
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid item container>
                <Grid item xs={1} sm={2} md={3} lg={4} />
                <Grid item xs={10} sm={8} md={6} lg={4}>
                    <GameBoard />
                </Grid>
                <Grid item xs={1} sm={2} md={3} lg={4} />
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state) => {
    return {
        currentPlayer: state.game.currentPlayer
    }
}

export default connect(mapStateToProps)(AppBoard);