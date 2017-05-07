import React, {Component} from 'react';
import {Link} from 'redux-little-router';

class NavigationItem extends Component {

	selectSection(){
		this.props.selectSection(this.props.section);
		if (this.props.display == 'mobile') {
			$('.mc-navigation-mobile').attr('style', 'display: none !important');
			$('.mc-content-wrapper-mobile').show();
		}
	}

	addActiveClass(){
		if (this.props.selectedSection == this.props.section) {
			return 'active ';
		}
		return '';
	}

	render() {
		var { title, section } = this.props;

		return (
			<li className={this.addActiveClass()} >
				<Link key={section} className={ section + " nav-item"} onClick={this.selectSection.bind(this)} href={section} >{title}</Link>
			</li>
			);
	}
}

export default NavigationItem