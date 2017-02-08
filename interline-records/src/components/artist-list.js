import React, {Component} from 'react';
import ArtistName from './artist-name';

var counter = 0;

class ArtistList extends Component {

	render(){
		var {artists} = this.props;
		return (
			<div className="side-nav">
				<ul>
					{artists.map( (artist) =>
						<ArtistName key={artist.id} artist={artist} />
					)}
				</ul>
			</div>
		);
	}

}

export default ArtistList