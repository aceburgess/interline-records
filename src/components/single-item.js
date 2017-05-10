import React, {Component} from 'react';

class SingleItem extends Component {

	onlyTheYear(item){
		var year = new Date(item.release_date)
		return year.getFullYear()
	}

	getVideoIcon(item){
		if (item.video_service == "yt") {
			return <i className="fa fa-youtube fa-lg"></i>;
		} else if (item.video_service == "vm") {
			return <i className="fa fa-vimeo fa-lg"></i>;
		}
	}

	render(){
		var {item, itemType} = this.props

		if (itemType == 'music') {
			return (
				<li><a href={item.link}>{this.onlyTheYear(item)} - {item.title}</a></li>
			);
		} else if (itemType == 'videos') {
			return (
				<li><a href={item.link}>{item.title} - {this.getVideoIcon(item)}</a></li>
			)
		}

	}
}

export default SingleItem