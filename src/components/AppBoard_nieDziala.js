import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import configureStore from '../store/configureStore';
import GameBoard from './GameBoard';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import SelectPlayer from './SelectPlayer';
import StartGame from './StartGame';
import { selectWinner } from '../actions/GameActions';
import GameOver from './GameOver';
import { AnimatePresence } from 'framer-motion';

const store = configureStore();



const AppBoard = (props) => {
    const location = useLocation();
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
        }
      });

    return (
        <div>
            <div>
                <AnimatePresence>
                    <Switch location={location} key={location.key}>
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
                <GameOver />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentPlayer: state.game.currentPlayer,
        gameState: state.game.gameState
    }
}

export default connect(mapStateToProps)(AppBoard);