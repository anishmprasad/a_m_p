// https://spreadsheets.google.com/feeds/list/1nQoL9lsvOmbVzDZxmqPMuwWQZwXiyMRGgQEVuCLUQro/1/public/values?alt=json

// https://spreadsheets.google.com/feeds/list/1vsuEOL0F6UdHU75kbm36XAvIQlVu-mgcnNhn0pI72Rg/1/public/values?alt=json

// import axios from 'axios';
// import { CANVAS_DATA, IS_PROJECT_CHANGED } from '../actionTypes/graph';
import { REQUEST_INITIALFETCH, RECEIVE_INITIALFETCH } from '../../actionTypes/Header';
// import { gsdata } from '../../Utils';

// import { createActionWithTypeAndPayload } from '../ActionTemplates';

export function requestInitialFetch(payload) {
	return { type: REQUEST_INITIALFETCH, payload };
}
export function receiveInitialFetch(payload) {
	return { type: RECEIVE_INITIALFETCH, payload };
}

// export function CanvasData(node) {
//   return function(dispatch, getState) {
//     dispatch(createActionWithTypeAndPayload(CANVAS_DATA, node));
//   };
// }

// export function isProjectChanged(object) {
//   return function(dispatch, getState) {
//     dispatch(createActionWithTypeAndPayload(IS_PROJECT_CHANGED, object));
//   };
// }
