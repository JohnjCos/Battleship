import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/game';
import {BrowserRouter as Router} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from './store'


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Game />
        </Router>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
