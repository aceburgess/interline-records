import React, {Component} from 'react';
// import ArtistLink from './artist-link.js';


class ArtistLinks extends Component {

	artistLink(linkClass, link, iconClass){
		return (
			<a key={linkClass} className={linkClass} href={link}><i className={'fa ' + iconClass + ' fa-lg'} aria-hidden="true"></i></a>
		)
	}

	artistLinksArray(artist){

		var links = [];

		var artistLinks = {
			'facebook': artist.facebook,
			'twitter': artist.twitter,
			'spotify': artist.spotify,
			'youtube': artist.youtube,
			'instagram': artist.instagram,
			'itunes': artist.itunes,
			'bandcamp': artist.bandcamp,
			'soundcloud': artist.soundcloud
		};

		var fontAwesomeClass = {
			'facebook': 'fa-facebook',
			'twitter': 'fa-twitter',
			'spotify': 'fa-spotify',
			'youtube': 'fa-youtube',
			'instagram': 'fa-instagram',
			'itunes': 'fa-apple',
			'bandcamp': 'fa-bandcamp',
			'soundcloud': 'fa-soundcloud'
		}

		var link;

		for (var key in artistLinks) {
			var linkClass = key;
			var url = artistLinks[key];
			var faClass = fontAwesomeClass[key];


			if (typeof linkClass !== "undefined" && typeof url !== "undefined") {
				link = this.artistLink(linkClass, url, faClass);		
				links.push(link);
			}
		}

		return links;
	}

	render(){
		var {artist} = this.props;
		var artistSocialLinks = this.artistLinksArray(artist);

		return (
			<div className="social-links">
				{artistSocialLinks}
			</div>
		)
	}

}

export default ArtistLinks