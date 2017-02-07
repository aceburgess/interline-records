import React, {Component} from 'react';

function backgroundStyle(url){
	return {
		backgroundImage: 'url(' + url + ')',
		backgroundSize: 'cover',
		overflow: 'hidden'
	}
}


class ArtistImage extends Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({nextProps});
	}

	render(){
		var { currentArtist } = this.props;
		return(
			<div className="artist-image-container">
				<h1>{currentArtist.name}</h1>
		{/*		<div key={this.props.activeArtist + '-photo'} style={backgroundStyle(this.props.activeUrl)} id={"artist-photo-" + this.props.activeArtist} className="artist-image"></div>
*/}			</div>
		);
	}
}

export default ArtistImage