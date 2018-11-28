import axios from 'axios';
// import { CANVAS_DATA, IS_PROJECT_CHANGED } from '../actionTypes/graph';
import { REQUEST_OPENSOURCE, RECEIVE_OPENSOURCE } from '../../actionTypes/OpenSource';
import { gsdata } from '../../Utils';

import { createActionWithTypeAndPayload } from '../ActionTemplates';

// export function fetchOpenSource(id = 1) {
//   const url = `https://spreadsheets.google.com/feeds/list/1vsuEOL0F6UdHU75kbm36XAvIQlVu-mgcnNhn0pI72Rg/${id}/public/values?alt=json`;
//   return function(dispatch) {
//     let initialFetch = axios
//       .get(url)
//       .then(res => {
//         dispatch(
//           createActionWithTypeAndPayload(FETCH_OPENSOURCE, gsdata(res.data))
//         );
//         return Promise.resolve(gsdata(res.data));
//       })
//       .catch(error => {
//         return Promise.reject(error);
//       });
//     return Promise.resolve(initialFetch);
//   };
// }

export function requestOpenSource(id) {
	return { type: REQUEST_OPENSOURCE, id };
}
export function receiveOpenSource(projects) {
	return { type: RECEIVE_OPENSOURCE, projects };
}
