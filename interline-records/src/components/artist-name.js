import React, {Component} from 'react';
import {Link} from 'redux-little-router';


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
			<li onClick={this.selectArtist.bind(this)} id={artist.slug} className={"artist"}>
				<Link href={'/artist/' + artist.slug}>
					{artist.name}
				</Link>
			</li>
		);
	}

}

export default ArtistName