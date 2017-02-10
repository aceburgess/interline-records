import React, {Component} from 'react';

function backgroundStyle(url){
	return {
		backgroundImage: 'url(' + url + ')',
		// backgroundSize: 'cover',
		// overflow: 'hidden'
	}
}



class ArtistImage extends Component {

	render(){
		var {artist} = this.props;
		return (
			<div>
				<div key={artist.name + '-photo'} style={backgroundStyle(artist.photo)} id={"artist-photo-" + artist.name} className="artist-image"></div>
			</div>
		);
	}
}

export default ArtistImage