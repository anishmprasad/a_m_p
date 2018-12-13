/**
 * @module Sagas/Header
 * @desc App
 */
import axios from 'axios';
import { all, put, takeLatest, call } from 'redux-saga/effects';

import { receiveInitialFetch } from '../../actions/Header';
import { REQUEST_INITIALFETCH } from '../../actionTypes/Header';
import { gsdata } from '../../Utils';

export function initialFetchApi(id = 1) {
	const url = `https://spreadsheets.google.com/feeds/list/1vsuEOL0F6UdHU75kbm36XAvIQlVu-mgcnNhn0pI72Rg/${id}/public/values?alt=json`;
	return axios.get(url).then(response => gsdata(response.data));
}

export function* initialFetch(node) {
	const initialFetch = yield call(initialFetchApi, node.id);
	yield put(receiveInitialFetch(initialFetch));
}

// Saga function that is initiated in the beginning to be able to listen to REQUESTINITIALFETCH  action
export default function* root() {
	yield all([takeLatest(REQUEST_INITIALFETCH, initialFetch)]);
}
