import { combineReducers } from 'redux';
import Header from './Header';
import OpenSource from './OpenSource';
import projectReducer from './Projects'


const rootReducer = combineReducers({
	Header,
	OpenSource,
	Project: projectReducer
});

export default rootReducer;
