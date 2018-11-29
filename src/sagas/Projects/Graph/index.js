/**
 * @module Sagas/OpenSource
 * @desc App
 */
import axios from 'axios';
import { all, put, select, takeLatest } from 'redux-saga/effects';
import { take, call, fork } from 'redux-saga/effects';

import { requestOpenSource, receiveOpenSource } from '../../actions/OpenSource';
import { REQUEST_OPENSOURCE } from '../../actionTypes/OpenSource';
import { gsdata } from '../../Utils';

// /**
//  * Switch Menu
//  *
//  * @param {Object} action
//  *
//  */
// export function* switchMenu({ payload }) {
// 	try {
// 		const repos = yield select(state => state.github.repos);

// 		/* istanbul ignore else */
// 		if (!repos.data[payload.query] || !repos.data[payload.query].length) {
// 			yield put({
// 				type: ActionTypes.GITHUB_GET_REPOS,
// 				payload
// 			});
// 		}
// 	} catch (err) {
// 		/* istanbul ignore next */
// 		yield put({
// 			type: ActionTypes.EXCEPTION,
// 			payload: err
// 		});
// 	}
// }

// /**
//  * App Sagas
//  */
// export default function* root() {
// 	yield all([takeLatest(ActionTypes.SWITCH_MENU, switchMenu)]);
// }

export function fetchOpenSourceApi(id = 1) {
	const url = `https://spreadsheets.google.com/feeds/list/1vsuEOL0F6UdHU75kbm36XAvIQlVu-mgcnNhn0pI72Rg/${id}/public/values?alt=json`;
	return axios.get(url).then(response => gsdata(response.data));
}

export function* fetchOpenSource(sourceKey) {
	// yield put(requestOpenSource(opensource));
	const projects = yield call(fetchOpenSourceApi, sourceKey.id);
	yield put(receiveOpenSource(projects));
}

// Saga function that is initiated in the beginning to be able to listen to REQUEST_OPENSOURCE action
// export function* fetchOpenSourceActionWatcher() {
// 	yield takeLatest(REQUEST_OPENSOURCE, fetchOpenSource);
// }

/**
 * Opensource Sagas
 */
// export default function* root() {
// 	yield fork(fetchOpenSource);
// }
// Saga function that is initiated in the beginning to be able to listen to REQUEST_OPENSOURCE action
export default function* root() {
	yield all([takeLatest(REQUEST_OPENSOURCE, fetchOpenSource)]);
}
