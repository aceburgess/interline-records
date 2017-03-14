import React, {Component} from 'react';

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
				<a key={section} className={ section + " nav-item"} onClick={this.selectSection.bind(this)} href="#">{title}</a>
			</li>
			);
	}
}

export default NavigationItem