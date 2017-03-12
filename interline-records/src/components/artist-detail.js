import React, {Component} from 'react';
import ArtistImage from './artist-image';
import ArtistLinks from './artist-links';

class ArtistDetail extends Component {


	render(){
		var {artist, artists} = this.props;

		return (
			<div id="artist-detail-page" className="fullpage-section">
				<div className="container-fluid site-container">
					<div className="row">

					</div>
					<div className="row ad-row artist-name-row">
						<div className="col-md-3"></div>
						<div className="col-md-6">
							<ArtistImage artist={artist} />
						</div>
						<div className="col-md-3"></div>
					</div>
					<div className="row">
						<div className="col-md-3"></div>
						<div className="col-md-3"><h2 className="ad-name">{artist.name}</h2></div>
						<div className="col-md-3">
							<ArtistLinks artist={artist} />
						</div>
						<div className="col-md-3"></div>
					</div>
				</div>
			</div>
		)
	}

}

export default ArtistDetail