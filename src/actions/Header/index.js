// https://spreadsheets.google.com/feeds/list/1nQoL9lsvOmbVzDZxmqPMuwWQZwXiyMRGgQEVuCLUQro/1/public/values?alt=json


// https://spreadsheets.google.com/feeds/list/1vsuEOL0F6UdHU75kbm36XAvIQlVu-mgcnNhn0pI72Rg/1/public/values?alt=json

import axios from 'axios';
// import { CANVAS_DATA, IS_PROJECT_CHANGED } from '../actionTypes/graph';
import { INITIALFETCH } from '../../actionTypes/Header';
import { gsdata } from '../../Utils'


import { createActionWithTypeAndPayload } from "../ActionTemplates";


export function InitialFetch(id = 1) {
  const url = `https://spreadsheets.google.com/feeds/list/1vsuEOL0F6UdHU75kbm36XAvIQlVu-mgcnNhn0pI72Rg/${id}/public/values?alt=json`;
  return function(dispatch) {
    let initialFetch = axios.get(url)
    .then(res => {
      dispatch(createActionWithTypeAndPayload(INITIALFETCH, gsdata(res.data)));
      return Promise.resolve(gsdata(res.data));
    })
    .catch(error => {
      return Promise.reject(error)
    })
    return Promise.resolve(initialFetch)
  };
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