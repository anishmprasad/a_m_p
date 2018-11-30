/**
 * @module Sagas/Graph
 * @desc App
 */

import { all, put, takeLatest } from 'redux-saga/effects';

import { CanvasData, isProjectChanged } from '../../../actions/Projects/Graph';
import { CANVAS_DATA, IS_PROJECT_CHANGED } from '../../../actionTypes/Projects/Graph';

export function* CanvasSaga(node) {
	yield put(CanvasData(node));
}

export function* isProjectChangedSaga(object) {
	yield put(isProjectChanged(object));
}
// Saga function that is initiated in the beginning to be able to listen to CANVAS_DATA and IS_PROJECT_CHANGED  action
export default function* root() {
	yield all([takeLatest(CANVAS_DATA, CanvasSaga), takeLatest(IS_PROJECT_CHANGED, isProjectChangedSaga)]);
}
