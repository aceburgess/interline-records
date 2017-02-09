import React, {Component} from 'react';


class ArtistName extends Component {

	constructor(props) {
		super(props);
	}

	componentWDidMount() {
		this.setState({
			artist: this.props.artist
		});
	}


	render(){
		var {artist} = this.props;
		return (
			<li key={'artist-' + artist.id} id={'artist-' + artist.id} className={"artist"}>
				{artist.name}
			</li>
		);
	}

}

export default ArtistName