import React from 'react';
import Tile from './Tile';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';


const GameBoard = (props) => {
    const tiles = props.game.map((mark, index, array) => {
        return (
            <Tile index={index} mark={mark} key={index} />
        )
    });
    
    return (
            <Grid container direction="column">
                <Grid item container>
                    {/* {tiles} */}
                    <Grid item xs={4}>
                        <Tile index={0} mark={'X'} />
                    </Grid>
                    <Grid item xs={4}>
                        <Tile index={1} mark={'O'} />
                    </Grid>
                    <Grid item xs={4}>
                        <Tile index={2} mark={'X'} />
                    </Grid>
                </Grid>
                <Grid item container>
                    {/* {tiles} */}
                    <Grid item xs={4}>
                        <Tile index={3} mark={'X'} />
                    </Grid>
                    <Grid item xs={4}>
                        <Tile index={4} mark={'X'} />
                    </Grid>
                    <Grid item xs={4}>
                        <Tile index={5} mark={'O'} />
                    </Grid>
                </Grid>
                <Grid item container>
                    {/* {tiles} */}
                    <Grid item xs={4}>
                        <Tile index={6} mark={'X'} />
                    </Grid>
                    <Grid item xs={4}>
                        <Tile index={7} mark={'X'} />
                    </Grid>
                    <Grid item xs={4}>
                        <Tile index={8} mark={'X'} />
                    </Grid>
                </Grid>
            </Grid>
    )
};

const mapStateToProps = (state) => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(GameBoard);