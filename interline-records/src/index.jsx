import React, { Component } from 'react';
import { render } from 'react-dom';
//ROUTES
import {Router, Route, IndexRoute, hashHistory, browserHistory, Link} from 'react-router';
import Main from './common/main.component.jsx';
import Home from './common/home.component.jsx';
import About from './common/about.component.jsx';
import Artist from './artist/artist.component.jsx';
// import InterlineModel from './model.js';

const allArtistsAPIQuery = 'http://local-dev-application.com:8000/artists/?format=json'

render((
	<Router history={browserHistory}>
		<Route path="/" component={Main} history={browserHistory}>
			<IndexRoute component={Home} />
			<Route path="artists" allArtists={allArtistsAPIQuery} component={Artist} />
			<Route path="about" component={About} />
		</Route>
	</Router>),
	document.getElementById('interline-app')
);