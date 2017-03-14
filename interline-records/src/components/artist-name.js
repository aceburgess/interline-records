import React, {Component} from 'react';


class ArtistName extends Component {

	constructor(props) {
		super(props);
	}

	selectArtist(){
		this.props.selectArtist(this.props.artist);
	}

	render(){
		var {artist} = this.props;
		return (
			<li onClick={this.selectArtist.bind(this)} className={"artist"}>
				<a href="#thirdPage">
					{artist.name}
				</a>
			</li>
		);
	}

}

export default ArtistName