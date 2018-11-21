import { CANVAS_DATA, IS_PROJECT_CHANGED } from '../../../actionTypes/Projects/Graph';

const initialState = {};

export default function Graph(state = initialState, action) {
	switch (action.type) {
		case CANVAS_DATA:
			return action.payload;
		case IS_PROJECT_CHANGED:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
}
