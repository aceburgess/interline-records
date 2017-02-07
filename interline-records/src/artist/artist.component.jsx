import React, {Component} from 'react';
import ArtistList from './artist-list.component.jsx';
import ArtistImage from './artist-image.component.jsx';

class Artist extends Component {
	constructor(props){
		super(props);
		this.state = {
			artists: [],
			activeArtist: ''
		};
	}

	componentDidMount() {
		this.ArtistList();
	}

	ArtistList() {
		var headersObject = {mode: 'cors'};
	  return fetch(this.props.allArtists, headersObject)
	    .then((response) => response.json())
	    .then((responseJson) => {
	    	// console.log(responseJson);
	    	this.setState({artists: responseJson});
	    	return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
	}

	update(artist){
		this.setState({
			activeArtist: artist
		})
		console.log(this.state.activeArtist);
	}

  render(){
  	var { artists, activeArtist } = this.state;

    return (
  		<div id="artists" className="section">
				<div className="container-fluid site-container">
					<div className="row">
						<div className="col-md-4">
							<div className="artist-page-logo-container">
								<img id="artist-page-logo" src="/images/interline-logo.png" alt="#"/>
							</div>
							<ArtistList artists={artists} getArtist={this.update.bind(this)} currentArtist={activeArtist} />
						</div>
						<div className="col-md-8">
							<ArtistImage currentArtist={activeArtist} />
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default Artist