import React from 'react';
import Tile from './Tile';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { motion } from 'framer-motion';
import { addMark, selectPlayer } from '../actions/GameActions';
import { Link } from 'react-router-dom';

const containerVariants = {
    hidden: { 
      opacity: 0, 
      x: '100vw',
      transition: {
        staggerChildren: 0.5,
      } 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: 'spring',
        mass: 0.4,
        damping: 8,
        staggerChildren: 0.4,
        when: "beforeChildren",
      }
    },
  };
  
  // const childVariants = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //   }
  // }

const GameBoard = (props) => {
    const onMarkTheTile = (id, currentPlayer) => {
        props.dispatch(addMark(id, currentPlayer));
    }
    const onSwitchThePlayer = (currentPlayer) => {
        const switchToPlayer = currentPlayer === 'X' ? 'O' : 'X';
        props.dispatch(selectPlayer(switchToPlayer));
    }
    const tiles = props.game.map((mark, index, array) => {
        return (
            <Grid item xs={4} key={index}>
                <Tile
                    index={index} mark={mark} key={index}
                    onMarkTheTile={onMarkTheTile}
                    onSwitchThePlayer={onSwitchThePlayer} />
            </Grid>
        )
    });

    return (
        <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='game-board'
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