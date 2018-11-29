import { all, fork } from 'redux-saga/effects';

// import app from './App';
// import github from './github';
import OpenSource from './OpenSource';
import Graph from './Projects/Graph';

/**
 * rootSaga
 */
export default function* root() {
	yield all([fork(OpenSource)], [fork(Graph)]);
}
