import React from 'react';
import Box from './Box';

import ControlButtons from './ControlButtons';

const GameBoard = () => {
    const l = [1,2,3];
    const boxes = l.map((index, array)=>{
        return (
            <Box index={index} key={index}/>
        )
    });

    return (
        <div>
            <ControlButtons />
            {boxes}
        </div>
    );
};

export default GameBoard;