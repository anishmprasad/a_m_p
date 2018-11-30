import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import reducer from '../reducers';
import rootSaga from '../sagas';

// import ReduxPromise from 'redux-promise';

import createSagaMiddleware from 'redux-saga';
export const sagaMiddleware = createSagaMiddleware();

// create a store that has redux-saga middleware enabled
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
sagaMiddleware.run(rootSaga);

export default function configureStore() {
	return createStoreWithMiddleware(reducer);
}
