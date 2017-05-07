import React, {Component} from 'react';
import ArtistList from './artist-list';
import ArtistImage from './artist-image';
import ArtistDetail from './artist-detail';
import ContentSection from './content-section';
import NavigationItem from './navigation-item';

class MainContent extends Component {

	onInputChange(term) {
		console.log(term);
		// this.props.getArtists(term);
		{/*	<input placeholder="Enter text to search for gifs!" onChange={event => this.onInputChange(event.target.value)} /> */}
	}

	mailingList(e){
		e.preventDefault();

		vex.dialog.prompt({
			unsafeMessage: '<h3>Subscribe to our mailing list</h3><p>Get pre-order info, discounts on music & events, and more from Interline Records!</p><br>',
			placeholder: 'Email',
			callback: function(value){
				console.log(value);
			}
		});
	}

	noArtists(){
		this.props.actions.selectSection('no-artists');
	}

	componentDidUpdate() {
		if (this.props.selectedSection == 'no-artists') {
			this.props.actions.selectSection('artists');
		}
		// this.props.checkIfLoaded(window.thisLoadingScreen);
	}

	componentWillMount() {
		window.thisLoadingScreen = this.props.loadingScreen();
	}

	componentDidMount() {
		this.props.checkIfLoaded(window.thisLoadingScreen);
	}

	componentDidUpdate() {
		this.props.checkIfLoaded(window.thisLoadingScreen);
	}

  render(){

  	var { artists, selectedArtist, selectedSection, general } = this.props;
  	var { selectSection, selectArtist, changeModal } = this.props.actions;

  	var siteSetting = general.sitesetting[0];

    return (
  		<div id="main-content" className="container-fluid site-container">
				<div className="mc-container">
					<div className="row"></div>
					<div className="row mc-row">
						<div className="mc-nav-container col-sm-4">
							<div className="mc-logo-container">
								<img className="mc-logo" src="/images/interline-logo.png" alt="#"/>
							</div>
							<ul className="mc-navigation">
								<NavigationItem selectedSection={selectedSection} selectArtist={selectArtist} selectSection={selectSection} title="Artists" section="/" />
								<NavigationItem selectedSection={selectedSection} selectSection={selectSection} title="About Us" section="/about" />
								<li><a href={siteSetting.facebook} target="_blank">Facebook</a></li>
								<li><a href={siteSetting.instagram} target="_blank">Instagram</a></li>
								<li><a href={siteSetting.twitter} target="_blank">Twitter</a></li>
								<li><a href={siteSetting.store} target="_blank">Store</a></li>
								<li><a onClick={this.mailingList} href="#">Mailing List</a></li>
							</ul>
						</div>
						<div className="col-sm-6">
							<div className="mc-content-wrapper">
								<ContentSection general={general} selectedSection={selectedSection} selectArtist={selectArtist} artists={artists} />
							</div>
						</div>
						<div className="col-sm-2"></div>
					</div>
					<div className="row"></div>
				</div>
			</div>
    );
  }
}


export default MainContent