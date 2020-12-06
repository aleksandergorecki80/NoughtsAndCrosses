import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppBoard from './components/AppBoard';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore();

console.log(store.getState(), '<-- STORE');

const App = () => {
    return (

        <Provider store={store}>
            <React.StrictMode>
                <Router>
                    <AppBoard />
                </Router>
            </React.StrictMode>
        </Provider>
    )
};

ReactDOM.render(<App />, document.getElementById('app'));