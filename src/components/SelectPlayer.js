import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import { selectPlayer, turnGameOn } from '../actions/GameActions';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
    transition: {
      staggerChildren: 0.5,
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
    }
  },
};

// const childVariants = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//   }
// }

const SelectPlayer = (props) => {
  const onSelectPlayer = (event) => {
    props.dispatch(selectPlayer(event.target.value));
    props.dispatch(turnGameOn());
  }

  return (
    <motion.div className="select-player"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >

      <Link to="/game">
        <button value="O" onClick={onSelectPlayer}>O</button>
      </Link>
      <Link to="/game">
        <button value="X" onClick={onSelectPlayer}>X</button>
      </Link>
    </motion.div>
  )
}


export default connect()(SelectPlayer);