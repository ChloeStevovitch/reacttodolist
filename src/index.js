import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// var jsonServer = require('json-server');

// var server = jsonServer.create();
// server.use('/bdd.json', jsonServer.router('bdd.json'));
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
