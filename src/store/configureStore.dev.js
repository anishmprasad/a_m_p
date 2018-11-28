import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import rootSaga from '../sagas';

import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

export const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

console.log('middleware', middleware);

// middleware.push(invariant());
middleware.push(createLogger({ collapsed: true }));

export default function configureStore(initialState) {
	const store = createStore(
		reducer,
		initialState,
		compose(
			applyMiddleware(...middleware),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);
	sagaMiddleware.run(rootSaga);

	if (module.hot) {
		// Enable hot module replacement for reducers
		module.hot.accept(() => {
			const nextRootReducer = require('../reducers/index').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}

// /* istanbul ignore next */
// if (process.env.NODE_ENV === 'development') {
//   const { createLogger } = require('redux-logger');
//   const invariant = require('redux-immutable-state-invariant').default;

//   middleware.push(invariant());
//   middleware.push(createLogger({ collapsed: true }));
// }

// export default middleware;

// const reducer = persistReducer(
//   {
//     key: 'rrsb', // key is required
//     storage, // storage is now required
//     whitelist: ['app', 'user'],
//   },
//   combineReducers({ ...rootReducer }),
// );

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// /* istanbul ignore next */
// const configStore = (initialState = {}) => {
//   const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(...middleware)));

//   sagaMiddleware.run(rootSaga);

//   if (module.hot) {
//     module.hot.accept('reducers', () => {
//       store.replaceReducer(require('reducers/index').default);
//     });
//   }

//   return {
//     persistor: persistStore(store),
//     store,
//   };
// };
