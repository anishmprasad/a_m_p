import { REQUEST_OPENSOURCE, RECEIVE_OPENSOURCE } from '../../actionTypes/OpenSource';

// import { createActionWithTypeAndPayload } from '../ActionTemplates';

export function requestOpenSource(id) {
	return { type: REQUEST_OPENSOURCE, id };
}
export function receiveOpenSource(projects) {
	return { type: RECEIVE_OPENSOURCE, projects };
}
