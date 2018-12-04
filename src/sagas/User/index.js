/**
 * @module Sagas/User
 * @desc User
 */

import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from 'constants/index';

/**
 * Login
 */
export function* login(): Generator<any, void, any> {
	try {
		yield call(delay, 400);

		yield put({ type: ActionTypes.USER_LOGIN_SUCCESS });
	} catch (err) {
		/* istanbul ignore next */
		yield put({ type: ActionTypes.USER_LOGIN_FAILURE, payload: err });
	}
}

/**
 * Logout
 */
export function* logout(): Generator<any, void, any> {
	try {
		yield call(delay, 200);

		yield put({ type: ActionTypes.USER_LOGOUT_SUCCESS });
	} catch (err) {
		/* istanbul ignore next */
		yield put({ type: ActionTypes.USER_LOGOUT_FAILURE, payload: err });
	}
}

/**
 * User Sagas
 */
export default function* root(): Generator<any, void, any> {
	yield all([takeLatest(ActionTypes.USER_LOGIN, login), takeLatest(ActionTypes.USER_LOGOUT, logout)]);
}
