import React, {Component} from 'react';

function backgroundStyle(url){
	return {
		backgroundImage: 'url(' + url + ')',
		backgroundSize: 'cover',
		overflow: 'hidden'
	}
}


class ArtistImage extends Component {

	render(){
		var { artists } = this.props;
		return (
			<div>
				<h1>{artists.length}</h1>
				<div key={artists[Object.keys(artists)[0]] + '-photo'} style={backgroundStyle(`http://google.com`)} id={"artist-photo-" + artists[Object.keys(artists)[0]]} className="artist-image"></div>
			</div>
		);
	}
}

export default ArtistImage