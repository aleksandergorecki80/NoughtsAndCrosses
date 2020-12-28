import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';


const useStyles = makeStyles((theme) => ({
    basicTileStyles: {
        // textAlign: 'center',
        maxHeight: '100px',
        height: '100px',
        fontSize: '70px'
    },
    tileContainer: {
        borderRight: '1px solid #F4A261',
        borderBottom: '1px solid #F4A261',
    },
    rightBorderContainer: {
        borderRight: '1px solid #F4A261',
    },
    bottomBorderContainer: {
        borderBottom: '1px solid #F4A261',
    },
    noBorderContainer: {
        border: 'none',
    }
}));

const svgPathVariants = {
    start: {
        opacity: 0,
        pathLength: 0
    },
    end: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
}
const svgCrossPathVariants = {
    start: {
        opacity: 0,
        pathLength: 0
    },
    end: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.5
        }
    }
}

const nought = () => {
    return (
        <svg 
        width="75" 
        height="75" 
        xmlns="http://www.w3.org/2000/svg"
        >
        <g>
          <title>O</title>
          <motion.path 
          id="svg_1" 
          className="nought-path"
          d="m1.875,37.75c0,-19.75138 15.99862,-35.75 35.75,-35.75c19.75138,0 35.75,15.99862 35.75,35.75c0,19.75138 -15.99862,35.75 -35.75,35.75c-19.75138,0 -35.75,-15.99862 -35.75,-35.75z" strokeWidth="1.5" stroke="#000" fill="none"
          variants={svgPathVariants}
          initial="start"
          animate="end"
          />
        </g>
      </svg>
    )
}

const cross = () => {
    return (
    <svg 
        width="75" 
        height="75" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <title>X</title>
          <motion.path 
            id="svg_1" d="m0.375,1l72.3371,72.3371" 
            stroke-width="1.5" 
            fill="none"
            className="nought-path"
            variants={svgPathVariants}
            initial="start"
            animate="end"
          />
          <motion.path 
            id="svg_2" 
            d="m74.375,1.25l-72.88025,72.88025"  
            strokeWidth="1.5" 
            fill="none"
            className="nought-path"
            variants={svgCrossPathVariants}
            initial="start"
            animate="end"
          />
        </g>
      </svg>
    )
}



const Tile = (props) => {  
    const displayMark = () => {
        if(props.mark === 'O') return nought();
        else if(props.mark === 'X') return cross();
        else return props.mark;
    }  

    const classes = useStyles();
    const onMarkChange = () => {
        if(props.isRun){
            props.onMarkTheTile(props.index, props.currentPlayer);
            props.onSwitchThePlayer(props.currentPlayer);
        }
    }

    if (props.index === 6 || props.index === 7) {
        return (
            <Box onClick={onMarkChange}>
                <Typography className={`${classes.basicTileStyles} ${classes.rightBorderContainer} tile`}>{displayMark()}</Typography>
            </Box>
        );
    } 
    else if (props.index === 2 || props.index === 5 ){
        return (
            <Box onClick={onMarkChange}><Typography className={`${classes.basicTileStyles} ${classes.bottomBorderContainer} tile`}>{displayMark()}</Typography></Box>
        );
    }
    else if (props.index === 8) {
        return (
            <Box onClick={onMarkChange}><Typography className={`${classes.basicTileStyles} ${classes.noBorderContainer} tile`}>{displayMark()}</Typography></Box>
        );
    }
    else {
        return (
            <Box onClick={onMarkChange}><Typography className={`${classes.basicTileStyles} ${classes.tileContainer} tile`}>{displayMark()}</Typography></Box>
        );
    }

};

const mapStateToProps = (state) => {
    return {
        currentPlayer: state.game.currentPlayer,
        isRun: state.game.isRun
    }
};

export default connect(mapStateToProps)(Tile);