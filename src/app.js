import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import GameBoard from './components/GameBoard';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

console.log(store.getState(), '<-- STORE');

const jsx = (
    <Provider store={store}>
        <GameBoard />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
