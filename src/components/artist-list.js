import React, {Component} from 'react';
import ArtistName from './artist-name';

var counter = 0;

class ArtistList extends Component {

	render(){
		var count = 0;
		var {artists} = this.props;

		return (
			<div className="ap-artist-nav">
				<ul>
					{artists.map( (artist) =>
						<ArtistName selectArtist={this.props.selectArtist} key={count +=1} artist={artist} />
					)}
				</ul>
			</div>
		);
	}

}

export default ArtistList