import React from 'react';
import GameBoard from './GameBoard';
import { Grid, makeStyles } from '@material-ui/core';
import StartReserButton from './StartReserButton';

const useStyles = makeStyles((theme) => ({
    
}));

const AppBoard = (props) => {
    return (
        <Grid container direction="column">
            <Grid item container>
                <Grid item xs={1} sm={2} />
                <Grid item xs={10} sm={8}>
                    <StartReserButton />
                </Grid>
                <Grid item xs={1} sm={2} />
            </Grid>
            <Grid item container>
                <Grid item xs={1} sm={2} md={3} lg={4}/>
                <Grid item xs={10} sm={8} md={6} lg={4}>
                    <GameBoard />
                </Grid>
                <Grid item xs={1} sm={2} md={3} lg={4}/>
            </Grid>
        </Grid>
    );
};

export default AppBoard;