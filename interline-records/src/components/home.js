import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {
	render(){
		// const mainBackgroundStyle = {
		// 	background: "url(" + "/images/new-york-matte.jpg" + ")",
		//   backgroundSize: 'cover'
		// }

    return (
    	<div id="landing-page" className="fullpage-section">
				<div className="container-fluid site-container lp-logo-container">
					<img className="lp-logo" src="/images/interline-logo.png" alt="#"/>
				</div>
    	</div>
    );
  }
}

export default Home