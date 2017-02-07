import React, {Component} from 'react';

var counter = 0;

class ArtistName extends Component {
	constructor(props) {
		super(props);
		// this.getArtist = this.props.getArtist.bind(this)
		this.state = {
			currentArtist: this.props.currentArtist
		}
	}

	update() {
		this.setState({currentArtist: this.props.artist});
		this.props.getArtist(this.state.currentArtist);
	}

	render(){
		var {artist, getArtist, currentArtist} = this.props;
		// var {currentArtist} = this.state;
		return (
			<li key={'artist-' + artist.id} id={'artist-' + artist.id} onClick={this.update.bind(this)} className={"artist"}>
				{artist.name}
			</li>
		);
	}

}

export default ArtistName