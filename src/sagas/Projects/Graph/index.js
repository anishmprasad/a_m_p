/**
 * @module Sagas/Graph
 * @desc App
 */

import { all, put, select, takeLatest, take, call, fork } from 'redux-saga/effects';

import { CanvasData, isProjectChanged } from '../../../actions/Projects/Graph';
import { CANVAS_DATA, IS_PROJECT_CHANGED } from '../../../actionTypes/Projects/Graph';

export function* CanvasData(node) {
	yield put(CanvasData(node));
}

export function* isProjectChanged(object) {
	yield put(isProjectChanged(object));
}
// Saga function that is initiated in the beginning to be able to listen to CANVAS_DATA and IS_PROJECT_CHANGED  action
export default function* root() {
	yield all([takeLatest(CANVAS_DATA, CanvasData)], [takeLatest(IS_PROJECT_CHANGED, isProjectChanged)]);
}
