import React, {Component} from 'react';
import ArtistImage from './artist-image';

class ArtistDetail extends Component {


	render(){
		var {artist, artists} = this.props;

		return (
			<div id="artist-detail-page" className="fullpage-slide" data-anchor="single-artist-slide">
				<div className="container-fluid site-container">
					<div className="row"></div>
					<div className="row">
						<div className="col-md-1"></div>
						<div className="col-md-3"><h2 className="ad-name">{artist.name}</h2></div>
						<div className="col-md-7"><h5 className="ad-links">SPOTIFY | BANDCAMP | SOUNDCLOUD | WEBSITE | ITUNES</h5></div>
						<div className="col-md-1"></div>
					</div>
					<div className="row ap-row">
						<div className="col-md-1"></div>
						<div className="col-md-3 ad-biography">{artist.biography}</div>
						<div className="col-md-7">
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