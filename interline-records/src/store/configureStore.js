import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from '../reducers/index';
import { routerForBrowser } from 'redux-little-router';

export default function configureStore(initialState){

	const routes = {
		'/': {
			title: 'Home',
			'/landing': {
				title: 'Landing'
			},
			'/main': {
				title: 'Main'
			},
			'/artists': {
				title: 'Artists',
				'/:artist-name': {
					title: 'Artist Name'
				}
			}
		}
	}

	const {
		reducer,
		middleware,
		enhancer
	} = routerForBrowser({
		routes
	})

	let middlewareCombined = [middleware, ReduxPromise];

	const store = createStore(
		combineReducers({router: reducer, rootReducer}),
		initialState,
		compose(
			enhancer,
			applyMiddleware(...middlewareCombined),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}
