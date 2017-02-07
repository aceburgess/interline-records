import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {
	render(){
		// const mainBackgroundStyle = {
		// 	background: "url(" + "/images/new-york-matte.jpg" + ")",
		//   backgroundSize: 'cover'
		// }

    return (
    	<div id="main-page-background" className="section">
				<div id="main-page" className="container-fluid site-container">
					<img id="main-logo" src="/images/interline-logo.png" alt="#"/>
				</div>
    	</div>
    );
  }
}

export default Home