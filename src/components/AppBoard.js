import React from 'react';
import { connect } from 'react-redux';
import GameBoard from './GameBoard';
import { Grid, makeStyles } from '@material-ui/core';
import ControlButtons from './ControlButtons';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({

}));

class AppBoard extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
        if (
            (this.props.gameState[0] === 'X' && this.props.gameState[0] === 'X' && this.props.gameState[8] === 'X') || 
            (this.props.gameState[2] === 'X' && this.props.gameState[4] === 'X' && this.props.gameState[6] === 'X') ||
            (this.props.gameState[2] === 'X' && this.props.gameState[5] === 'X' && this.props.gameState[8] === 'X') ||
            (this.props.gameState[1] === 'X' && this.props.gameState[4] === 'X' && this.props.gameState[7] === 'X') ||
            (this.props.gameState[0] === 'X' && this.props.gameState[3] === 'X' && this.props.gameState[6] === 'X') ||
            (this.props.gameState[0] === 'X' && this.props.gameState[1] === 'X' && this.props.gameState[2] === 'X') ||
            (this.props.gameState[3] === 'X' && this.props.gameState[4] === 'X' && this.props.gameState[5] === 'X') ||
            (this.props.gameState[6] === 'X' && this.props.gameState[7] === 'X' && this.props.gameState[8] === 'X') 
            ){
            console.log('X wins');
        } else if (
            (this.props.gameState[0] === 'O' && this.props.gameState[0] === 'O' && this.props.gameState[8] === 'O') || 
            (this.props.gameState[2] === 'O' && this.props.gameState[4] === 'O' && this.props.gameState[6] === 'O') ||
            (this.props.gameState[2] === 'O' && this.props.gameState[5] === 'O' && this.props.gameState[8] === 'O') ||
            (this.props.gameState[1] === 'O' && this.props.gameState[4] === 'O' && this.props.gameState[7] === 'O') ||
            (this.props.gameState[0] === 'O' && this.props.gameState[3] === 'O' && this.props.gameState[6] === 'O') ||
            (this.props.gameState[0] === 'O' && this.props.gameState[1] === 'O' && this.props.gameState[2] === 'O') ||
            (this.props.gameState[3] === 'O' && this.props.gameState[4] === 'O' && this.props.gameState[5] === 'O') ||
            (this.props.gameState[6] === 'O' && this.props.gameState[7] === 'O' && this.props.gameState[8] === 'O')
        )
        // const numberOfMoves = this.props.gameState.map((value, index)=>{
        //     if (index === 4){
        //         return 'l'
        //     }
        // });
        console.log('O wins');
      }
      render(){
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
                                { this.props.currentPlayer ? `${this.props.currentPlayer} is playing now` : ''} 
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item xs={1} sm={2} md={3} lg={4} />
                    <Grid item xs={10} sm={8} md={6} lg={4}>
                        <GameBoard />
                    </Grid>
                    <Grid item xs={1} sm={2} md={3} lg={4} />
                </Grid>
            </Grid>
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