import React, {Component} from 'react';
import {Link, push, go, replace} from 'redux-little-router';

class Home extends Component {


	componentDidMount() {
		// setTimeout(function(){
		// 	window.location.href = '/artists';
		// },5000);
	}

	render(){
		// const mainBackgroundStyle = {
		// 	background: "url(" + "/images/new-york-matte.jpg" + ")",
		//   backgroundSize: 'cover'
		// }

    return (
    	<div id="landing-page" className="container-fluid site-container">
				<div className="lp-logo-container">
					<img className="lp-logo" src="/images/interline-logo.png" alt="#"/>
				</div>
    	</div>
    );
  }
}

export default Home