import React from 'react';
import { connect } from 'react-redux';
import { turnGameOn } from '../actions/GameActions';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import SelectPlayer from './SelectPlayer';
import ResetGame from './ResetGame';


//    MODAL SECTION
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    // position: 'absolute',
    // width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: '90%',
    position: 'relative',
    display: 'flex',
    height: '30vh',
    top: '0',
    left: '0',
    transform: 'none'
  },
  // button styles
  button: {
    margin: theme.spacing(1),
    padding: '20px 50px',
    fontSize: '2rem',
    fontWeight: "bold"
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  modalBackgroundStyles: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

}));
///

/// BUTTONS SECTION


const ControlButtons = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Turn on the game
  const onTurnOnOrResetGame = () => {
    !props.isRun ? props.dispatch(turnGameOn()) : props.dispatch(resetGame());
  }

  const onClickHandle = () => {
    handleOpen();
    // onTurnOnOrResetGame();
  }

  const selectPlayer = (
    // <Box style={modalStyle} className={classes.paper}>
    <Box  className={classes.paper}>
      <SelectPlayer handleClose={handleClose} />
    </Box>
  );

  const resetGame = (
    // <Box style={modalStyle} className={classes.paper}>
    <Box  className={classes.paper}>
      <ResetGame handleClose={handleClose} />
    </Box>
  );

  return (
    <Box className={classes.buttonsContainer}>
      <Button
        variant="outlined"
        size="large"
        color="primary"
        className={classes.button}
        onClick={onClickHandle}
      >
        {!props.isRun ? 'START' : 'RESET'}
      </Button>
      <Button
        variant="outlined"
        size="large"
        color="primary"
        className={classes.button}
      >
        SAVE
      </Button>
      <Modal
        className={classes.modalBackgroundStyles}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {!props.isRun ? selectPlayer : resetGame}
      </Modal>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    isRun: state.game.isRun
  }
}

export default connect(mapStateToProps)(ControlButtons);