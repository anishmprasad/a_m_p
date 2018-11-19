import { FETCH_OPENSOURCE } from '../../actionTypes/OpenSource';
const initialState = {};

export default function OpenSource(state = initialState, action) {
  switch (action.type) {
    case FETCH_OPENSOURCE:
      return action.payload;
    // case IS_PROJECT_CHANGED:
    //   return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
