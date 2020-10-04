import React from 'react';
import Box from './Box';
import { connect } from 'react-redux';

import ControlButtons from './ControlButtons';

const GameBoard = (props) => {
    const boxes = props.game.map((mark, index, array)=>{
        return (
            <Box index={index} mark={mark} key={index}/>
        )
    });

    return (
        <div>
            <ControlButtons />
            {boxes}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(GameBoard);