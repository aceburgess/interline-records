import React, {Component} from 'react';
import ArtistName from './artist-name';

var counter = 0;

class ArtistList extends Component {

	sortArtistsByLength(artists) {
		if (artists.length > 1) {
			artists.sort(function(a,b){ return a.name.length - b.name.length; })
		} else {
			return artists;
		}
	}

	render(){
		var artists = this.sortArtistsByLength(this.props.artists);
		var {artists} = this.props;
		return (
			<div className="ap-side-nav">
				<ul>
					{artists.map( (artist) =>
						<ArtistName selectArtist={this.props.selectArtist} key={artist.id} artist={artist} />
					)}
				</ul>
			</div>
		);
	}

}

export default ArtistList