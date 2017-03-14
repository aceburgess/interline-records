import React, {Component} from 'react';
import ArtistList from './artist-list';
import AboutUs from './about-us';

class ContentSection extends Component {

	render(){

		var { selectedSection, selectArtist, artists } = this.props;

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