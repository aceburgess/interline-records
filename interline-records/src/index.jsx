import React, { Component } from 'react';
import { render } from 'react-dom';
//ROUTES
import {Router, Route, IndexRoute, hashHistory, browserHistory, Link} from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './main.scss';

import Main from './containers/main';
import Home from './components/home';
import About from './components/about';
import MainContent from './components/main-content';
// import InterlineModel from './model.js';

const store = configureStore();


// render((
// 	<Router history={browserHistory}>
// 		<Route path="/" component={Main} history={browserHistory}>
// 			<IndexRoute component={Home} />
// 			<Route path="artists" component={Artist} />
// 			<Route path="about" component={About} />
// 		</Route>
// 	</Router>),
// 	document.getElementById('interline-app')
// );

render((
	<Provider store={store}>
		<Main />
	</Provider>),
	document.getElementById('interline-app')
);