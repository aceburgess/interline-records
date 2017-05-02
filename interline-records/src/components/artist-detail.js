import React, {Component} from 'react';
import ArtistImage from './artist-image';
import ArtistLinks from './artist-links';
import ArtistInfo from './artist-info';

class ArtistDetail extends Component {

	getArtist(artists){
		var artistSlug = location.pathname.split('/')[2];

		for (var key in artists) {
				console.log('happening');
			if (artistSlug == artists[key].slug){
				this.props.selectArtist(artists[key]);
			}
		}
		// return 'no artist';
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.artists != nextProps.artists) {
			this.getArtist(nextProps.artists);
		}
		return true;
	}

	componentWillMount() {
		window.thisLoadingScreen = this.props.loadingScreen();
	}

	componentDidMount() {
		this.props.checkIfLoaded(window.thisLoadingScreen);
	}

	componentDidUpdate(prevProps, prevState) {
		this.props.checkIfLoaded(window.thisLoadingScreen);
	}

	render(){

		var {artist, artists} = this.props;

		// if (artist.name == 'NONE') {
		// 	this.getArtist(artists);
		// }

		// if (artist == 'no artist') {
		// 	alert('no artist');
		// }

		return (
			<div id="artist-detail-page" className="container-fluid site-container">
				<div className="ad-container">
					<div className="row"></div>
					<div className="row ad-row artist-name-row">
						<div className="col-md-1"></div>
						<div className="col-md-6">
							<ArtistImage artist={artist} />
						</div>
						<div className="col-md-4">
							<ArtistInfo artist={artist} />
						</div>
						<div className="col-md-1"></div>
					</div>
					<div className="row">
						<div className="col-md-1"></div>
						<div className="col-md-3"><h2 className="ad-name">{artist.name}</h2></div>
						<div className="col-md-3">
							<ArtistLinks artist={artist} />
						</div>
						<div className="col-md-4"></div>
						<div className="col-md-1"></div>
					</div>
					<div className="row"></div>
				</div>
			</div>
		)
	}

}

export default ArtistDetail