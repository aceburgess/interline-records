import React, {Component} from 'react';


class ArtistName extends Component {

	constructor(props) {
		super(props);
		this.state = {
			artist: {name: 'FUCK', id: 1}
		}
	}

	componentWDidMount() {
		this.setState({
			artist: this.props.artist
		});
	}


	render(){
		var {artist} = this.state;
		return (
			<li key={'artist-' + artist.id} id={'artist-' + artist.id} className={"artist"}>
				{artist.name}
			</li>
		);
	}

}

export default ArtistName