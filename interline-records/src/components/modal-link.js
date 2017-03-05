import React, {Component} from 'react';

class ModalLink extends Component {

	render() {
		var {text, changeModal} = this.props;

		return (
			<a onClick={changeModal} href="#site-modal" rel="modal:open">{text}</a>
		);
	}

}

export default ModalLink