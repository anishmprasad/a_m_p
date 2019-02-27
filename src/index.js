import React from 'react';
// import { render } from 'react-dom';
import { render } from 'react-snapshot';
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import Root from './Root';

// const store = configureStore();
// console.log(store);
const rootElement = document.getElementById('root');

render(<Root store={configureStore} />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
