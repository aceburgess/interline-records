import React, {Component} from 'react';
import ArtistList from './artist-list';
import ArtistImage from './artist-image';
import ArtistDetail from './artist-detail';

class Artist extends Component {

	onInputChange(term) {
		console.log(term);
		// this.props.getArtists(term);
		{/*	<input placeholder="Enter text to search for gifs!" onChange={event => this.onInputChange(event.target.value)} /> */}
	}

  render(){
  	var { artists, currentArtist, selectArtist } = this.props;

    return (
  		<div id="artists-page" className="fullpage-section">
  			<div className="fullpage-slide" data-anchor="artists-slide">
					<div className="container-fluid site-container">
						<div className="row"></div>
						<div className="row ap-row">
							<div className="col-md-4">
								<div className="ap-logo-container">
									<img className="ap-logo" src="/images/interline-logo.png" alt="#"/>
								</div>
							</div>
							<div className="col-md-7">
							  <ArtistList selectArtist={selectArtist} artists={artists} />
							</div>
							<div className="col-md-1"></div>
						</div>
						<div className="row"></div>
					</div>
				</div>
				<ArtistDetail artist={currentArtist} artists={artists} />
			</div>
    );
  }
}


export default Artist