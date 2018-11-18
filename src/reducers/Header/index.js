
import { INITIALFETCH } from '../../actionTypes/Header';
const initialState = {};

export default function Header(state = initialState, action) {
  switch (action.type) {
    case INITIALFETCH:
      return action.payload;
    // case IS_PROJECT_CHANGED:
    //   return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
