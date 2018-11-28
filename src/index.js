import React from 'react';
import { render } from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import Root from './Root';
// import rootSaga from '../src/sagas';

const store = configureStore();
// console.log(store, rootSaga);
// store.runSaga(rootSaga);
const rootElement = document.getElementById('root');

render(<Root store={store} />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from 'react';
// import { render } from 'react-dom';
// import Root from 'containers/Root';
// import configureStore from './store/configureStore';
// import 'babel-polyfill';
// const store = configureStore();
// const rootElement = document.getElementById('root');

// render(<Root store={store} />, rootElement);
