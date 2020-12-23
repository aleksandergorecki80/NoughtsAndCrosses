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
    console.log(event.target.attributes.value.value)
    props.dispatch(selectPlayer(event.target.attributes.value.value));
    props.dispatch(turnGameOn());
  }

  return (
    <motion.div className="container select-player"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >

      <Link to="/game" className="select-player__button" onClick={onSelectPlayer} value="kki">
        <svg 
        width="75" 
        height="75" 
        xmlns="http://www.w3.org/2000/svg"
        
        >
        <g>
          <title>O</title>
          <path 
          id="svg_1" 
          className="nought-path"
          d="m1.875,37.75c0,-19.75138 15.99862,-35.75 35.75,-35.75c19.75138,0 35.75,15.99862 35.75,35.75c0,19.75138 -15.99862,35.75 -35.75,35.75c-19.75138,0 -35.75,-15.99862 -35.75,-35.75z" strokeWidth="1.5" stroke="#000" fill="none"/>
        </g>
</svg>


      </Link>
      <Link to="/game">
        <button value="X" onClick={onSelectPlayer}>X</button>
      </Link>
    </motion.div>
  )
}


export default connect()(SelectPlayer);