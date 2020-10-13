import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    basicTileStyles: {
        textAlign: 'center',
        maxHeight: '100px',
        height: '100px',
        fontSize: '70px'
    },
    tileContainer: {

        borderRight: '1px solid black',
        borderBottom: '1px solid black',

    },
    rightBorderContainer: {
        borderRight: '1px solid black',

    },
    bottomBorderContainer: {
        borderBottom: '1px solid black',

    },
    noBorderContainer: {
        border: 'none',

    }
}));


const Tile = (props) => {
    const classes = useStyles();
    const onMarkChange = () => {
        props.onMarkTheTile(props.index);
    }

    if (props.index === 6 || props.index === 7) {
        return (
            <Box onClick={onMarkChange}>
                <Typography className={`${classes.basicTileStyles} ${classes.rightBorderContainer}`}>{props.mark}</Typography>
            </Box>
        );
    } 
    else if (props.index === 2 || props.index === 5 ){
        return (
            <Box onClick={onMarkChange}><Typography className={`${classes.basicTileStyles} ${classes.bottomBorderContainer}`}>{props.mark}</Typography></Box>
        );
    }
    else if (props.index === 8) {
        return (
            <Box onClick={onMarkChange}><Typography className={`${classes.basicTileStyles} ${classes.noBorderContainer}`}>{props.mark}</Typography></Box>
        );
    }
    else {
        return (
            <Box onClick={onMarkChange}><Typography className={`${classes.basicTileStyles} ${classes.tileContainer}`}>{props.mark}</Typography></Box>
        );
    }

};

export default Tile;