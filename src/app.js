import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Grid } from '@material-ui/core';
import AppBoard from './components/AppBoard';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import StartGame from './components/StartGame';
import GameBoard from './components/GameBoard';
import SelectPlayer from './components/SelectPlayer';

const store = configureStore();

console.log(store.getState(), '<-- STORE');

const App = () => {
    return (

        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/game">
                        <GameBoard />
                    </Route>
                    <Route path="/select">
                        <SelectPlayer />
                    </Route>
                    <Route path="/">
                        <StartGame />
                    </Route>
                </Switch>
            </BrowserRouter>
            {/* <AppBoard /> */}
        </Provider>
    )
};

ReactDOM.render(<App />, document.getElementById('app'));
