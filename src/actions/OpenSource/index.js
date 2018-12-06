// import axios from 'axios';
// import { CANVAS_DATA, IS_PROJECT_CHANGED } from '../actionTypes/graph';
import { REQUEST_OPENSOURCE, RECEIVE_OPENSOURCE } from '../../actionTypes/OpenSource';
// import { gsdata } from '../../Utils';

// import { createActionWithTypeAndPayload } from '../ActionTemplates';

export function requestOpenSource(id: number) {
	return { type: REQUEST_OPENSOURCE, id };
}
export function receiveOpenSource(projects: Object) {
	return { type: RECEIVE_OPENSOURCE, projects };
}
