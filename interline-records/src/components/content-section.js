import React, {Component} from 'react';
import ArtistList from './artist-list';
import AboutUs from './about-us';
import {Fragment} from 'redux-little-router';

class ContentSection extends Component {

	sortArtistsByLength(artists) {
		if (artists.length > 0) {
			return artists.sort(function(a,b){ return a.name.length - b.name.length; })
		} else {
			return artists;
		}
	}

	render(){

		var { selectedSection, selectArtist, artists} = this.props;
		artists = this.sortArtistsByLength(artists);

	  switch (selectedSection) {
	    case 'artist-list':
	      return (
				  <ArtistList selectArtist={selectArtist} artists={artists} />
	      )
	    case 'about-us':
	      return (
	      	<AboutUs />
	      )
	    default:
	      return (
					<h1>Under Construction</h1>
	      )
    }
  };


}

export default ContentSection