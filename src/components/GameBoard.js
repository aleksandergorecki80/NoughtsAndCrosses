import React from 'react';
import Tile from './Tile';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { motion } from 'framer-motion';
import { addMark, selectPlayer } from '../actions/GameActions';

const boardVarients = {
    hidden: {
        x: '100vw',
    },
    visible: {
        x: 0,
        transition: { type: 'spring', stiffness: 120 }
    }
}

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
                    onSwitchThePlayer={onSwitchThePlayer} />
            </Grid>
        )
    });

    return (
        <motion.div
            variants={boardVarients}
            initial='hidden'
            animate='visible'
        >
            <Grid item container>
                <Grid item xs={1} sm={2} md={3} lg={4} />
                    <Grid item container xs={10} sm={8} md={6} lg={4}>
                        {tiles}
                    </Grid>
                <Grid item xs={1} sm={2} md={3} lg={4} />
            </Grid>
        </motion.div>


    )
};

const mapStateToProps = (state) => {
    return {
        game: state.game.gameState
    }
}

export default connect(mapStateToProps)(GameBoard);