import React, {Component} from 'react';

class StaffCompany extends Component {


	render() {

		var { name, link, description } = this.props;


		return (
			<li><a href={link}><i className='fa fa-pencil' aria-hidden="true"></i>{name}: <span className="title">{description}</span></a></li>
		)
	}

}


export default StaffCompany