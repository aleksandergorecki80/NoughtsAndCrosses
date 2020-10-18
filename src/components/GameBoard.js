import React from 'react';
import Tile from './Tile';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { addMark } from '../actions/GameActions';

const GameBoard = (props) => {
    const onMarkTheTile = (id) => {
        props.dispatch(addMark(id, 'O'));
    } 
    const tiles = props.game.map((mark, index, array) => {
        return (
            <Grid item xs={4} key={index}>
                <Tile index={index} mark={mark} key={index} onMarkTheTile={onMarkTheTile}/>
            </Grid>
        )
    });
    
    return (
            <Grid container>
                    {tiles}
            </Grid>
    )
};

const mapStateToProps = (state) => {
    return {
        game: state.game.gameState
    }
}

export default connect(mapStateToProps)(GameBoard);