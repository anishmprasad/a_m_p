/**
 * @module Sagas/Graph
 * @desc App
 */

import { all, put, takeLatest } from 'redux-saga/effects';

import { CanvasData, isProjectChanged } from '../../../actions/Projects/Graph';
import { CANVAS_DATA, IS_PROJECT_CHANGED } from '../../../actionTypes/Projects/Graph';

export function* CanvasSaga(node: json): Generator<any, void, any> {
	yield put(CanvasData(node));
}

export function* isProjectChangedSaga(object: json): Generator<any, void, any> {
	yield put(isProjectChanged(object));
}
// Saga function that is initiated in the beginning to be able to listen to CANVAS_DATA and IS_PROJECT_CHANGED  action
export default function* root(): Generator<any, void, any> {
	yield all([takeLatest(CANVAS_DATA, CanvasSaga), takeLatest(IS_PROJECT_CHANGED, isProjectChangedSaga)]);
}
