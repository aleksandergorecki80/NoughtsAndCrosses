import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import { selectWinner, resetGame } from '../actions/GameActions';
import GameOver from './GameOver';
import StartGame from './StartGame';
import SelectPlayer from './SelectPlayer';
import GameBoard from './GameBoard';
import { AnimatePresence } from 'framer-motion';

const AppBoard = (props) => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const closeModalResetGame = () => {
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
            setShowModal(true);
        } else if (
          props.gameState[0] !== ' ' && 
          props.gameState[1] !== ' ' && 
          props.gameState[2] !== ' ' && 
          props.gameState[3] !== ' ' && 
          props.gameState[4] !== ' ' && 
          props.gameState[5] !== ' ' && 
          props.gameState[6] !== ' ' && 
          props.gameState[7] !== ' ' && 
          props.gameState[8] !== ' '
          ) {
            props.dispatch(selectWinner('Draw'));
            setShowModal(true);
          }
    });

useEffect(() => {
  // save to the local storage
  localStorage.setItem('game', JSON.stringify({
    gameState: props.gameState,
    currentPlayer: props.currentPlayer,
    isWinner: props.isWinner,
    isRun: props.isRun,
    guestPlaysAs: props.guestPlaysAs
  }));
});

useEffect(() => {
  if(props.currentPlayer !== props.guestPlaysAs) {
    console.log('losuj tutaj');
  }
});

  return (
    <div>
      <GameOver showModal={showModal} closeModalResetGame={closeModalResetGame} isWinner={props.isWinner}/>
      <AnimatePresence exitBeforeEnter onExitComplete={() => closeModalResetGame()}>
        <Switch location={location} key={location.key}>
          <Route path="/game">
            <GameBoard setShowModal={setShowModal}/>
          </Route>
          <Route path="/select">
            <SelectPlayer setShowModal={setShowModal} />
          </Route>
          <Route path="/">
            <StartGame setShowModal={setShowModal} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      gameState: state.game.gameState,  
      currentPlayer: state.game.currentPlayer,
      isWinner: state.game.isWinner,
      isRun: state.game.isRun,
      guestPlaysAs: state.game.guestPlaysAs
  }
}

export default connect(mapStateToProps)(AppBoard);