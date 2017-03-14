import React, {Component} from 'react';
import ArtistList from './artist-list';
import ArtistImage from './artist-image';
import ArtistDetail from './artist-detail';
import ModalLink from './modal-link';
import ContentSection from './content-section';
import NavigationItem from './navigation-item';

class MainContent extends Component {

	onInputChange(term) {
		console.log(term);
		// this.props.getArtists(term);
		{/*	<input placeholder="Enter text to search for gifs!" onChange={event => this.onInputChange(event.target.value)} /> */}
	}

	noArtists(){
		this.props.actions.selectSection('no-artists');
	}

	componentDidUpdate() {
		if (this.props.selectedSection == 'no-artists') {
			this.props.actions.selectSection('artist-list')
		}
	}

  render(){
  	var { artists, selectedArtist, selectedSection } = this.props;
  	var { selectSection, selectArtist, changeModal } = this.props.actions;

    return (
  		<div id="main-content" className="fullpage-section">
				<div className="container-fluid site-container">
					<div className="row"></div>
					<div className="row mc-row">
						<div className="mc-nav-container col-md-4">
							<div className="mc-logo-container">
								<img className="mc-logo" src="/images/interline-logo.png" alt="#"/>
							</div>
							<ul className="mc-navigation">
								<NavigationItem selectedSection={selectedSection} selectArtist={selectArtist} selectSection={selectSection} title="Artists" section="artist-list" />
								<NavigationItem selectedSection={selectedSection} selectSection={selectSection} title="About Us" section="about-us" />
								<li>Facebook</li>
								<li>Twitter</li>
								<li>Store</li>
								<li><ModalLink changeModal={changeModal} text="Mailing List"/></li>
							</ul>
						</div>
						<div className="col-md-5">
							<div className="mc-content-wrapper">
								<ContentSection selectedSection={selectedSection} selectArtist={selectArtist} artists={artists} />
							</div>
						</div>
						<div className="col-md-3"></div>
					</div>
					<div className="row"></div>
				</div>
			</div>
    );
  }
}


export default MainContent