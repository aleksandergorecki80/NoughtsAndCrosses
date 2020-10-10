import React from 'react';

import GameBoard from './GameBoard';

import { Grid } from '@material-ui/core';

import ControlButtons from './ControlButtons';

const AppBoard = (props) => {
    return (
        <Grid container direction="column">
            <Grid item container>
                <Grid item xs={1} sm={2} />
                <Grid item xs={10} sm={8}>
                    <ControlButtons />
                </Grid>
                <Grid item xs={1} sm={2} />
            </Grid>
            <Grid item container>
                <Grid item xs={1} sm={2} />
                <Grid item xs={10} sm={8}>
                    <GameBoard />
                </Grid>
                <Grid item xs={1} sm={2} />
            </Grid>
        </Grid>
    );
};

export default AppBoard;