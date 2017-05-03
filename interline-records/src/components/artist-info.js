import React, {Component} from 'react';
import ItemList from './item-list';

class ArtistInfo extends Component {


	render(){

		var {artist} = this.props;

		return (
			<div className="artist-info">
				<div className="row">
					<div className="col-md-4">
						<h3 className="about"><span className="title">ABOUT </span></h3>
						<p className="bio"><span className="artist-name">{artist.name}:</span>{artist.biography}</p>
					</div>
					<div className="col-md-4">
						<ItemList artist={artist} items={artist.albums} itemType={'music'} />
					</div>
					<div className="col-md-4">
						<ItemList artist={artist} items={artist.videos} itemType={'videos'} />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 contact">
						<h5>Email us about {artist.name} @ {artist.contact_email}</h5>
					</div>
				</div>
			</div>
		)
	}
}

export default ArtistInfo