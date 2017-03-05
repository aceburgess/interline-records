import React, {Component} from 'react';

class SiteModal extends Component {

	render(){
		var { modalState } = this.props

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
						<h1>{modalState.title}</h1>
					</div>
					<div className="col-md-3">
						<p className="modal-text">{modalState.content}</p>
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