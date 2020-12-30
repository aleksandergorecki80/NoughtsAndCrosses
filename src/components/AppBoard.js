import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import { selectWinner, resetGame, addMark, switchPlayer, turnGameOff } from '../actions/GameActions';
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

const closeModal = () => {
  // props.dispatch(resetGame());
  setShowModal(false);
}

useEffect(() => {
  console.log(props.game);
  console.log('use efewct sprawdza stan gry');

if(props.isRun){
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
    props.dispatch(turnGameOff());
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
    props.dispatch(turnGameOff());
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
    props.dispatch(turnGameOff());
    setShowModal(true);
  } 
  else if (props.currentPlayer !== props.guestPlaysAs && props.currentPlayer !== ' ' &&  props.isWinner === '' && props.isRun === true) {
    console.log('use efewct gra komputer');
    const computerPlaysAs = props.guestPlaysAs === 'X' ? 'O' : 'X';
    let indexToMark = '';
    do{
      indexToMark = Math.floor(Math.random() * 9);
    } while (props.gameState[indexToMark] !== ' ');
    console.log('kompurter losuje', indexToMark);
  //     props.dispatch(addMark(indexToMark, computerPlaysAs));
      // props.dispatch(switchPlayer(props.guestPlaysAs));
  } else {
    console.log('gra player');
  }
}

        
    });



useEffect(() => {

  // console.log('use efewct local storage');
  // // save to the local storage
  // localStorage.setItem('game', JSON.stringify({
  //   gameState: props.gameState,
  //   currentPlayer: props.currentPlayer,
  //   isWinner: props.isWinner,
  //   isRun: props.isRun,
  //   guestPlaysAs: props.guestPlaysAs
  // }));
  
  // draw a place to mark by computer

});

  return (
    <div>
      <GameOver showModal={showModal} closeModalResetGame={closeModalResetGame} isWinner={props.isWinner}/>
      <AnimatePresence exitBeforeEnter onExitComplete={() => closeModal()}>
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
    game: state.game,
      gameState: state.game.gameState,  
      currentPlayer: state.game.currentPlayer,
      isWinner: state.game.isWinner,
      isRun: state.game.isRun,
      guestPlaysAs: state.game.guestPlaysAs
  }
}

export default connect(mapStateToProps)(AppBoard);