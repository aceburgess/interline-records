import React, {Component} from 'react';
import ArtistImage from './artist-image';

class ArtistDetail extends Component {


	render(){
		var {artist, artists} = this.props;

		return (
			<div id="artist-detail-page" className="fullpage-section">
				<div className="container-fluid site-container">
					<div className="row"></div>
					<div className="row">
						<div className="col-md-1"></div>
						<div className="col-md-3"><h2 className="ad-name">{artist.name}</h2></div>
						<div className="col-md-7"></div>
						<div className="col-md-1"></div>
					</div>
					<div className="row ad-row">
						<div className="col-md-1"></div>
						<div className="col-md-3 ad-biography">
							{artist.biography}
							<h5 className="ad-links">Go to {artist.name + "'s"}:<br/> Spotify, Youtube, Bandcamp, Itunes, Facebook, Twitter, Instagram</h5>
						</div>
						<div className="col-md-1"></div>
						<div className="col-md-6">
							<ArtistImage artist={artist} />
						</div>
						<div className="col-md-1"></div>
					</div>
					<div className="row"></div>
				</div>
			</div>
		);
	}

}

export default ArtistDetail