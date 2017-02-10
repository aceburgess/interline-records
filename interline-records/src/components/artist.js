import React, {Component} from 'react';
import ArtistList from './artist-list';
import ArtistImage from './artist-image';

class Artist extends Component {

	onInputChange(term) {
		console.log(term);
		// this.props.getArtists(term);
	}

  render(){
  	var { artists } = this.props;

    return (
  		<div id="artists" className="section">
	{/*				<input placeholder="Enter text to search for gifs!" onChange={event => this.onInputChange(event.target.value)} /> */}
				<div className="container-fluid site-container">
					<div className="row"></div>
					<div className="row artist-page-row">
						<div className="col-md-3">
							<div className="artist-page-logo-container">
								<img id="artist-page-logo" src="/images/interline-logo.png" alt="#"/>
							</div>
						  <ArtistList selectArtist={this.props.selectArtist} artists={artists} />
						</div>
						<div className="col-md-8">
							<ArtistImage artist={this.props.currentArtist} artists={artists} />
						</div>
						<div className="col-md-1"></div>
					</div>
					<div className="row"></div>
				</div>
			</div>
    );
  }
}

export default Artist