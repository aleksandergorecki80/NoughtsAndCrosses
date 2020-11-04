import React from 'react';
import Tile from './Tile';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { addMark, selectPlayer } from '../actions/GameActions';

const GameBoard = (props) => {

    const onMarkTheTile = (id, currentPlayer) => {
        props.dispatch(addMark(id, currentPlayer));
    }
    const onSwitchThePlayer = (currentPlayer) => {
        const switchToPlayer = currentPlayer === 'X' ? 'O' : 'X';
        props.dispatch(selectPlayer(switchToPlayer));
    }
    const checkTheWinner = () => {
        // Tu przenieś kod ze sprawdzaniem winnera ale dziisij zabardzo mi sie che spać 
        // kod kjest w pliku AppBoard
    }
    const tiles = props.game.map((mark, index, array) => {
        return (
            <Grid item xs={4} key={index}>
                <Tile 
                // {...props}
                index={index} mark={mark} key={index} 
                onMarkTheTile={onMarkTheTile} 
                onSwitchThePlayer={onSwitchThePlayer}/>
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