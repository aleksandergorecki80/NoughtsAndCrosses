import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { selectWinner, resetGame } from '../actions/GameActions';

import GameBoard from './GameBoard';
import SelectPlayer from './SelectPlayer';
import StartGame from './StartGame';
import GameOver from './GameOver';


const AppBoard = (props) => {

    const [showModal, setShowModal ] = useState(false);
    const closeModalResetGame = () => {
        console.log('kki');
        props.dispatch(resetGame());
        setShowModal(false);
    }

    useEffect(() => {
        if (
            (props.gameState[0] === 'X' && props.gameState[4] === 'X' && props.gameState[8] === 'X') ||
            (props.gameState[2] === 'X' && props.gameState[4] === 'X' && props.gameState[6] === 'X') ||
            (props.gameState[2] === 'X' && props.gameState[5] === 'X' && props.gameState[8] === 'X') ||
            (props.gameState[1] === 'X' && props.gameState[4] === 'X' && props.gameState[7] === 'X') ||
            (props.gameState[0] === 'X' && props.gameState[3] === 'X' && props.gameState[6] === 'X') ||
            (props.gameState[0] === 'X' && props.gameState[1] === 'X' && props.gameState[2] === 'X') ||
            (props.gameState[3] === 'X' && props.gameState[4] === 'X' && props.gameState[5] === 'X') ||
            (props.gameState[6] === 'X' && props.gameState[7] === 'X' && props.gameState[8] === 'X')
        ) {
            props.dispatch(selectWinner('X'));
            console.log('X wins');
            setShowModal(true);
        } else if (
            (props.gameState[0] === 'O' && props.gameState[4] === 'O' && props.gameState[8] === 'O') ||
            (props.gameState[2] === 'O' && props.gameState[4] === 'O' && props.gameState[6] === 'O') ||
            (props.gameState[2] === 'O' && props.gameState[5] === 'O' && props.gameState[8] === 'O') ||
            (props.gameState[1] === 'O' && props.gameState[4] === 'O' && props.gameState[7] === 'O') ||
            (props.gameState[0] === 'O' && props.gameState[3] === 'O' && props.gameState[6] === 'O') ||
            (props.gameState[0] === 'O' && props.gameState[1] === 'O' && props.gameState[2] === 'O') ||
            (props.gameState[3] === 'O' && props.gameState[4] === 'O' && props.gameState[5] === 'O') ||
            (props.gameState[6] === 'O' && props.gameState[7] === 'O' && props.gameState[8] === 'O')
        ) {
            props.dispatch(selectWinner('O'));
            console.log('O wins');
            setShowModal(true);
        }
    });
console.log(showModal, 'show modal app')
    return (
        <div>
            <AnimatePresence>
                <Switch>
                    <Route path="/game">
                        <GameBoard />
                    </Route>
                    <Route path="/select">
                        <SelectPlayer />
                    </Route>
                    <Route path="/">
                        <StartGame />
                    </Route>
                </Switch>
            </AnimatePresence>
            <GameOver closeModalResetGame={closeModalResetGame} showModal={showModal}/>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentPlayer: state.game.currentPlayer,
        gameState: state.game.gameState,
        isWinner: state.game.isWinner
    }
}

export default connect(mapStateToProps)(AppBoard);