import React from 'react';
import Tile from './Tile';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import ControlButtons from './ControlButtons';

const GameBoard = (props) => {
    const tiles = props.game.map((mark, index, array) => {
        return (
            <Tile index={index} mark={mark} key={index} />
        )
    });

    return (
        <Grid container direction="column">
            <Grid item container>
                <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                    <ControlButtons />
                </Grid>
                <Grid item xs={false} sm={2} />
            </Grid>
            <Grid item>
                {tiles}
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state) => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(GameBoard);