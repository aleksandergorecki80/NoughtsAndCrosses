import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { useEffect } from "react";
import { resetGame } from "../actions/GameActions";
import { Link } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '30vw',
    maxWidth: '90%',
    position: 'relative',
    display: 'flex',
    height: '30vh',
    top: '0',
    left: '0',
    transform: 'none'
  },
  modalContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  modalBackgroundStyles: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItemStyle: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const boardVarients = {
  hidden: {
      x: '100vw',
  },
  visible: {
      x: 0,
      transition: { type: 'spring', stiffness: 120 }
  }
}

const GameOver = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  // 
  useEffect(() => {
    console.log("Behavior when the component receives new state or props.");
    const isWinner = props.isWinner ? true : false;
    setOpen(isWinner);
  });

  const handleClose = () => {
    props.dispatch(resetGame());
    setOpen(false);
  };

  const body = (
    <Box className={classes.paper}>
      <Grid container direction="column" spacing={2} className={classes.gridItemStyle}>
        <Grid item container className={classes.gridItemStyle}><Typography>GAME OVER</Typography></Grid>
        <Grid item container className={classes.gridItemStyle}><Typography>{props.isWinner} wins.</Typography></Grid>
        <Grid item container className={classes.gridItemStyle}>
          <Link to="/select">
            <button onClick={handleClose}>OK</button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );

  console.log(open);

  return (


    <Box className={classes.modalContainer}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
            variants={boardVarients}
            initial='hidden'
            animate='visible'
        >
          <Modal
            className={classes.modalBackgroundStyles}
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </motion.div>

      </AnimatePresence>
    </Box>

  );
}

const mapStateToProps = (state) => {
  return {
    isWinner: state.game.isWinner
  }
}

export default connect(mapStateToProps)(GameOver);