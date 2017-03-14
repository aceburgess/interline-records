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
		var count = 0;
		var artists = this.sortArtistsByLength(this.props.artists);
		var {artists} = this.props;

		var artists = artists.filter( function(artist){
			return !!artist.display_artist;
		})

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