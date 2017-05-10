import React, {Component} from 'react'

class CheckOutMore extends Component {

	getLinks(artist, type){
		var exists = [
			{
				'Bandcamp': !!artist.bandcamp,
				'Soundcloud': !!artist.soundcloud
			},
			{
				'YouTube': !!artist.youtube,
				'Vimeo': !!artist.vimeo
			}
		]
		var links = [
			{
				'Bandcamp': artist.bandcamp,
				'Soundcloud': artist.soundcloud
			},
			{
				'YouTube': artist.youtube,
				'Vimeo': artist.vimeo
			}
		]

		if (type == 'music') { exists = exists[0]; links = links[0] };
		if (type == 'videos') { exists = exists[1]; links = links[1] };

		Object.keys(links).map(function(site){
			if (!exists[site]) {
				delete links[site];
			}
		})

		if (Object.keys(links).length > 1) {
			return (
				<span>
					<a href={links[Object.keys(links)[0]]}>{Object.keys(links)[0]}</a> & <a href={links[Object.keys(links)[1]]}>{Object.keys(links)[1]}</a>
				</span>
			)
		} else {
			return (
				<span>
					<a href={links[Object.keys(links)[0]]}>{Object.keys(links)[0]}</a>
				</span>
			)
		}
	}

	render(){

		var {artist, type} = this.props;

	  switch (type) {
	    case 'music':
	      return (
					<p className="album">Check out more of {artist.name + "'s"} music @ {this.getLinks(artist, type)}</p>
	      )
	    case 'videos':
	      return (
  				<p className="videos">Check out more of {artist.name + "'s"} videos @ {this.getLinks(artist, type)}</p>
	      )
	    default:
	      return (
					<p className="album videos">Nothing released at the moment. Check back soon!</p>
	      )
    }
	}
}


export default CheckOutMore