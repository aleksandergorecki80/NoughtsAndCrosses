import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import { guestPlayAs, switchPlayer, turnGameOn } from '../actions/GameActions';

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

const SelectPlayer = (props) => {
  const onSelectPlayer = (event) => {
    props.dispatch(guestPlayAs(event.target.textContent));
    props.dispatch(switchPlayer(event.target.textContent));
  }

  return (
    <motion.div 
      className="container start-game"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Link to="/game" className="select-player__button" onClick={onSelectPlayer}>      
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
      <Link to="/game" className="select-player__button" onClick={onSelectPlayer}>     
        <svg 
          width="75" 
          height="75" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <title>X</title>
            <path transform="rotate(-90, 37.1815, 37.4315)" 
              id="svg_1" d="m1.125,1.375l72.11298,72.11298" 
              strokeWidth="1.5" stroke="#000000" 
              fill="none"
              className="nought-path"
            />
            <path 
              id="svg_2" 
              d="m1.125,1.375l72.11298,72.11298"  
              strokeWidth="1.5" 
              stroke="#000000" 
              fill="none"
              className="nought-path"
            />
          </g>
        </svg>
      </Link>
    </motion.div>
  )
}

export default connect()(SelectPlayer);