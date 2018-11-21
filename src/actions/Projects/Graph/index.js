// import axios from 'axios';
import { CANVAS_DATA, IS_PROJECT_CHANGED } from '../../../actionTypes/Projects/Graph';

import { createActionWithTypeAndPayload } from "../../ActionTemplates";


export function CanvasData(node) {
	return function(dispatch) {
		dispatch(createActionWithTypeAndPayload(CANVAS_DATA, node));
	};
}

export function isProjectChanged(object) {
	return function(dispatch) {
		dispatch(createActionWithTypeAndPayload(IS_PROJECT_CHANGED, object));
	};
}
