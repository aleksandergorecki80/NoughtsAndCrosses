import React from 'react';
import { connect } from 'react-redux';
import configureStore from '../store/configureStore';
import GameBoard from './GameBoard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SelectPlayer from './SelectPlayer';
import StartGame from './StartGame';
import { selectWinner } from '../actions/GameActions';
import GameOver from './GameOver';

const store = configureStore();

class AppBoard extends React.Component {
    constructor(props) {
        super(props);
     }
    componentDidUpdate() {
        if (
            (this.props.gameState[0] === 'X' && this.props.gameState[4] === 'X' && this.props.gameState[8] === 'X') || 
            (this.props.gameState[2] === 'X' && this.props.gameState[4] === 'X' && this.props.gameState[6] === 'X') ||
            (this.props.gameState[2] === 'X' && this.props.gameState[5] === 'X' && this.props.gameState[8] === 'X') ||
            (this.props.gameState[1] === 'X' && this.props.gameState[4] === 'X' && this.props.gameState[7] === 'X') ||
            (this.props.gameState[0] === 'X' && this.props.gameState[3] === 'X' && this.props.gameState[6] === 'X') ||
            (this.props.gameState[0] === 'X' && this.props.gameState[1] === 'X' && this.props.gameState[2] === 'X') ||
            (this.props.gameState[3] === 'X' && this.props.gameState[4] === 'X' && this.props.gameState[5] === 'X') ||
            (this.props.gameState[6] === 'X' && this.props.gameState[7] === 'X' && this.props.gameState[8] === 'X') 
            ){
                this.props.dispatch(selectWinner('X'));
                console.log('X wins');

        } else if (
            (this.props.gameState[0] === 'O' && this.props.gameState[4] === 'O' && this.props.gameState[8] === 'O') || 
            (this.props.gameState[2] === 'O' && this.props.gameState[4] === 'O' && this.props.gameState[6] === 'O') ||
            (this.props.gameState[2] === 'O' && this.props.gameState[5] === 'O' && this.props.gameState[8] === 'O') ||
            (this.props.gameState[1] === 'O' && this.props.gameState[4] === 'O' && this.props.gameState[7] === 'O') ||
            (this.props.gameState[0] === 'O' && this.props.gameState[3] === 'O' && this.props.gameState[6] === 'O') ||
            (this.props.gameState[0] === 'O' && this.props.gameState[1] === 'O' && this.props.gameState[2] === 'O') ||
            (this.props.gameState[3] === 'O' && this.props.gameState[4] === 'O' && this.props.gameState[5] === 'O') ||
            (this.props.gameState[6] === 'O' && this.props.gameState[7] === 'O' && this.props.gameState[8] === 'O')
        ) {
            this.props.dispatch(selectWinner('O'));
            console.log('O wins');
        }      
      }
      render(){

        return (
            <div>
                <BrowserRouter>
                <div>
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
                    <GameOver />
                    </div>
                </BrowserRouter>
                
            </div>
        );
      }
}

const mapStateToProps = (state) => {
    return {
        currentPlayer: state.game.currentPlayer,
        gameState: state.game.gameState
    }
}

export default connect(mapStateToProps)(AppBoard);