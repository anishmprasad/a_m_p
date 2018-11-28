import { all, fork } from 'redux-saga/effects';

// import app from './App';
// import github from './github';
import OpenSource from './OpenSource';

/**
 * rootSaga
 */
export default function* root() {
	yield all([fork(OpenSource)]);
}
