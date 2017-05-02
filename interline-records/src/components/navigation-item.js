import React, {Component} from 'react';
import {Link} from 'redux-little-router';

class NavigationItem extends Component {

	selectSection(){
		this.props.selectSection(this.props.section);
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