import React, {Component} from 'react';

class SiteModal extends Component {

	render(){
		return (
			<div id="site-modal" className="modal">
				<div className="row"></div>
				<div className="row">
					<div className="col-md-1">
						<a className="close-site-modal" href="#close-modal" rel="modal:close">x</a>
					</div>
				</div>
				<div className="row content">
					<div className="col-md-1">
					</div>
					<div className="col-md-3 about">
						<h1>About</h1>
					</div>
					<div className="col-md-3">
						<p className="modal-text">Started in 2011 in Harlem, NYC. Now based in Brooklyn NY. Working with great artists accross the globe in various genres.</p>
					</div>
					<div className="col-md-3">
					</div>
					<div className="col-md-1"></div>
				</div>
				<div className="row"></div>
			</div>
		);
	}
}

export default SiteModal