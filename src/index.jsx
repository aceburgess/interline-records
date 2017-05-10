import React, { Component } from 'react';
import { render } from 'react-dom';
//ROUTES
// import {Router, Route, IndexRoute, hashHistory, browserHistory, Link} from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './main.scss';

import Main from './containers/main';
import Home from './components/home';
import About from './components/about';
import MainContent from './components/main-content';

import { initializeCurrentLocation, RouterProvider } from 'redux-little-router';

// import InterlineModel from './model.js';

const store = configureStore();

const initialLocation = store.getState().router;

if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}


render((
	<Provider store={store}>
		<RouterProvider store={store}>
			<Main />
		</RouterProvider>
	</Provider>
	),
	document.getElementById('interline-app')
);