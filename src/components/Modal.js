import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { useEffect } from "react";
import { resetGame } from "../actions/GameActions";

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

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
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: '50%',
    position: 'relative',
    display: 'flex',
    height: '20vh',
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
  }
}));



const SimpleModal = (props) => {
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
      <Grid container direction="column" spacing={2}>
        <Grid item container><Typography>GAME OVER</Typography></Grid>
        <Grid item container><Typography>{props.isWinner} wins.</Typography></Grid>
        <Grid item container><button onClick={handleClose}>OK</button></Grid>
      </Grid>
    </Box>
  );

  console.log(open);

  return (
    <Box className={classes.modalContainer}>
      <Modal
        className={classes.modalBackgroundStyles}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    isWinner: state.game.isWinner
  }
}

export default connect(mapStateToProps)(SimpleModal);