import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    tileContainer: {
        textAlign: 'center',
        borderRight: '1px solid black',
        borderBottom: '1px solid black',
        maxHeight: '100px',
        height: '100px'
    },
    rightBorderContainer: {
        borderRight: '1px solid black',
        maxHeight: '100px',
        height: '100px'
    },
    bottomBorderContainer: {
        borderBottom: '1px solid black',
        maxHeight: '100px',
        height: '100px'
    },
    noBorderContainer: {
        border: 'none',
        maxHeight: '100px',
        height: '100px'
    }
}));


const Tile = (props) => {
    const classes = useStyles();

    console.log(typeof props.index)
    if (props.index === 6 || props.index === 7) {
        return (
            <Box><Typography className={classes.rightBorderContainer}>{props.index} , {props.mark}</Typography></Box>
        );
    } 
    else if (props.index === 2 || props.index === 5 ){
        return (
            <Box><Typography className={classes.bottomBorderContainer}>{props.index} , {props.mark}</Typography></Box>
        );
    }
    else if (props.index === 8) {
        return (
            <Box><Typography className={classes.noBorderContainer}>{props.index} , {props.mark}</Typography></Box>
        );
    }
    else {
        return (
            <Box><Typography className={classes.tileContainer}>{props.index} , {props.mark}</Typography></Box>
        );
    }

};

export default Tile;