import React, {Component} from 'react';

class ArtistInfo extends Component {

	render(){

		var {artist} = this.props;

		return (
			<div className="artist-info">
				<div className="ai-logo-container">
					<img className="ai-logo" src="/images/interline-logo.png" alt="#"/>
				</div>
				<p className="bio"><span className="artist-name">{artist.name}:</span>{artist.biography}</p>
				<h3 className="albums"><i className="fa fa-music"></i></h3>
				<ul>
					<li>2013 - Dreamland</li>
					<li>2011 - I Was Lost In Your Shadow</li>
					<li>2009 - The Nights Are All {"That's"} Left</li>
					<li>2007 - Lady Blue</li>
					<p className="album">Check out more of {artist.name + "'s"} music @ Bandcamp & Soundcloud</p>
				</ul>
				<h3 className="videos"><i className="fa fa-film"></i></h3>
				<ul>
					<li>Vos Vovles A Mi - <i className="fa fa-youtube fa-lg"></i></li>
					<li>Dreamland - <i className="fa fa-vimeo fa-lg"></i></li>
					<p className="videos">Check out more of {artist.name + "'s"} videos @ YouTube & Vimeo</p>
				</ul>
				<h3 className="contact"><i className="fa fa-commenting-o"></i></h3>
				<ul>
					<li>Management: Interline Mangement</li>
					<li>Contact: info@interlinerecords.com</li>
				</ul>
			</div>
		)
	}
}

export default ArtistInfo