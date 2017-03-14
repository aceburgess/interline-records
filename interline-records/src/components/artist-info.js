import React, {Component} from 'react';

class ArtistInfo extends Component {

	render(){

		var {artist} = this.props;

		return (
			<div className="artist-info">
				<ul>
					<li>NEW VIDEO - Check out {artist.name + "'s"} latest music video BLAH BLAH</li>
					<li>NEW ALBUM - Check out {artist.name + "'s"} new album</li>
				</ul>
				<h3 className="albums">ALBUMS</h3>
				<ul>
					<li>2013 - Dreamland</li>
					<li>2011 - I Was Lost In Your Shadow</li>
					<li>2009 - The Nights Are All {"That's"} Left</li>
					<li>2007 - Lady Blue</li>
					<p className="album">Check out more of {artist.name + "'s"} music @ Bandcamp & Soundcloud</p>
				</ul>
				<h3 className="videos">VIDEOS</h3>
				<ul>
					<li><i className="fa fa-youtube fa-lg"></i> - Vos Vovles A Mi</li>
					<li><i className="fa fa-vimeo fa-lg"></i> - Dreamland</li>
					<p className="videos">Check out more of {artist.name + "'s"} videos @ YouTube & Vimeo</p>
				</ul>
				<h3 className="contact">CONTACT</h3>
				<ul>
					<li>Management: Interline Mangement</li>
					<li>Contact: info@interlinerecords.com</li>
				</ul>
			</div>
		)
	}
}

export default ArtistInfo