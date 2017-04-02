import React, {Component} from 'react';
import ItemList from './item-list';

class ArtistInfo extends Component {


	render(){

		var {artist} = this.props;

		return (
			<div className="artist-info">
				<div className="ai-logo-container">
					<img className="ai-logo" src="/images/interline-logo.png" alt="#"/>
				</div>
				<h3 className="about"><span className="title">ABOUT </span></h3>
				<p className="bio"><span className="artist-name">{artist.name}:</span>{artist.biography}</p>
				<ItemList artist={artist} items={artist.albums} itemType={'music'} />
				<ItemList artist={artist} items={artist.videos} itemType={'videos'} />
				<h3 className="contact"><span className="title">CONTACT </span></h3>
				<ul>
					<li>Management: Interline Mangement</li>
					<li>Contact: info@interlinerecords.com</li>
				</ul>
			</div>
		)
	}
}

export default ArtistInfo