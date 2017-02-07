import React, {Component} from 'react';
import ArtistName from './artist-name.component.jsx';

var counter = 0;

class ArtistList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentArtist: this.props.currentArtist
		}
	}

	update(artist) {
		this.setState({currentArtist: artist});
		this.props.getArtist(this.state.currentArtist);
	}

	render(){
		var {artists, getArtist, currentArtist} = this.props;
		// var {currentArtist} = this.state;
		return (
			<div className="side-nav">
				<ul>
					{artists.map( (artist) =>
						<ArtistName key={artist.id} artist={artist} getArtist={this.update.bind(this)} currentArtist={currentArtist}/>
					)}
				</ul>
			</div>
		);
	}

}

export default ArtistList