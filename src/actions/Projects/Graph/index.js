import { CANVAS_DATA, IS_PROJECT_CHANGED } from '../../../actionTypes/Projects/Graph';

export function CanvasData(payload) {
	return { type: CANVAS_DATA, payload };
}
export function isProjectChanged(payload) {
	return { type: IS_PROJECT_CHANGED, payload };
}
