import React from 'react';
import { connect } from 'react-redux';
import GameBoard from './GameBoard';
import { Grid, makeStyles } from '@material-ui/core';
import ControlButtons from './ControlButtons';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { selectWinner } from '../actions/GameActions';

const useStyles = makeStyles((theme) => ({

}));

const AppBoard = (props) => {
    const onCheckIfWinner = () => {
        console.log(props.gameState);
        if (
            (props.gameState[0] === 'X' && props.gameState[4] === 'X' && props.gameState[8] === 'X') || 
            (props.gameState[2] === 'X' && props.gameState[4] === 'X' && props.gameState[6] === 'X') ||
            (props.gameState[2] === 'X' && props.gameState[5] === 'X' && props.gameState[8] === 'X') ||
            (props.gameState[1] === 'X' && props.gameState[4] === 'X' && props.gameState[7] === 'X') ||
            (props.gameState[0] === 'X' && props.gameState[3] === 'X' && props.gameState[6] === 'X') ||
            (props.gameState[0] === 'X' && props.gameState[1] === 'X' && props.gameState[2] === 'X') ||
            (props.gameState[3] === 'X' && props.gameState[4] === 'X' && props.gameState[5] === 'X') ||
            (props.gameState[6] === 'X' && props.gameState[7] === 'X' && props.gameState[8] === 'X') 
            ){
                console.log('X wins');
                props.dispatch(selectWinner('X'));
        } else if (
            (props.gameState[0] === 'O' && props.gameState[4] === 'O' && props.gameState[8] === 'O') || 
            (props.gameState[2] === 'O' && props.gameState[4] === 'O' && props.gameState[6] === 'O') ||
            (props.gameState[2] === 'O' && props.gameState[5] === 'O' && props.gameState[8] === 'O') ||
            (props.gameState[1] === 'O' && props.gameState[4] === 'O' && props.gameState[7] === 'O') ||
            (props.gameState[0] === 'O' && props.gameState[3] === 'O' && props.gameState[6] === 'O') ||
            (props.gameState[0] === 'O' && props.gameState[1] === 'O' && props.gameState[2] === 'O') ||
            (props.gameState[3] === 'O' && props.gameState[4] === 'O' && props.gameState[5] === 'O') ||
            (props.gameState[6] === 'O' && props.gameState[7] === 'O' && props.gameState[8] === 'O')
        ){
            console.log('O wins');
            props.dispatch(selectWinner('O'));
        }
        
        
      }
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item container>
                <Grid item xs={1} sm={2} />
                <Grid item xs={10} sm={8}>
                    <ControlButtons />
                </Grid>
                <Grid item xs={1} sm={2} />
            </Grid>
            <Grid item container
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Box>
                        <Typography>
                            { props.currentPlayer ? `${props.currentPlayer} is playing now` : ''} 
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid item container>
                <Grid item xs={1} sm={2} md={3} lg={4} />
                <Grid item xs={10} sm={8} md={6} lg={4}>
                    <GameBoard onCheckIfWinner={onCheckIfWinner}/>
                </Grid>
                <Grid item xs={1} sm={2} md={3} lg={4} />
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state) => {
    return {
        currentPlayer: state.game.currentPlayer,
        gameState: state.game.gameState
    }
}

export default connect(mapStateToProps)(AppBoard);