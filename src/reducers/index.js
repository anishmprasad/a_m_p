import { combineReducers } from 'redux';
import Header from './Header';
import OpenSource from './OpenSource';


const rootReducer = combineReducers({
  Header,
  OpenSource
});

export default rootReducer;
