import React, {Component} from 'react';
import ArtistList from './artist-list';
import ArtistImage from './artist-image';
import ArtistDetail from './artist-detail';
import ContentSection from './content-section';
import NavigationItem from './navigation-item';

class MainContent extends Component {

	showMobileSection(){
		console.log('yes');
	}

	thisMailingList(e) {
		e.preventDefault();
		this.props.mailingList(this.props.actions.addToMailingList);
	}

	noArtists(){
		this.props.actions.selectSection('no-artists');
	}

	openContact(e) {
		e.preventDefault();
		var sitesetting = this.props.general.sitesetting[0];
		var message = "<h4>" + sitesetting.contact_name + "</h4><p>" + sitesetting.contact_email + "</p><h4>Demos</h4><p>" + sitesetting.demo_email + "</p><br>";

		vex.dialog.alert({
			unsafeMessage: message
			// callback: function(value){
			// 	console.log(value);
			// }
		})
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
		// var mailingList = this.props.mailingList

		setTimeout(function(){ 
			if(sessionStorage.mailingList != 'opened') {
				$('#mailing-list-pop-up')[0].click(); 
			} else {
				console.log('Already shown');
			}
		}, 13000);
	}

	componentDidUpdate() {
		this.props.checkIfLoaded(window.thisLoadingScreen);
	}

  render(){

  	var { artists, selectedArtist, selectedSection, general, mailingList } = this.props;
  	var { selectSection, selectArtist, changeModal } = this.props.actions;

  	var siteSetting = general.sitesetting[0];

    return (
  		<div id="main-content" className="container-fluid site-container">
				<div className="mc-container">
					<div className="row"></div>
					<div className="row mc-row">
						<div className="mc-nav-container col-sm-4">
							<div className="mc-logo-container">
								<a href="/">
									<img className="mc-logo" src="/images/interline-logo.png" alt="#"/>
								</a>
							</div>
							<ul className='mc-navigation'>
								<NavigationItem display={'desktop'} selectedSection={selectedSection} selectArtist={selectArtist} selectSection={selectSection} title="Artists" section="/" />
								<NavigationItem display={'desktop'} selectedSection={selectedSection} selectSection={selectSection} title="About Us" section="/about" />
								<li><a id='mailing-list-pop-up' onClick={this.thisMailingList.bind(this)} href="#">Mailing List</a></li>
								<li><a href='https://news.interlinerecords.com' target="_blank">News / Blog</a></li>
								<li><a onClick={this.openContact.bind(this)} href='#'>Contact</a></li>
								<li><a href={siteSetting.store} target="_blank">Store</a></li>
								<br/>
								<li><a href={siteSetting.soundcloud} target="_blank">Soundcloud</a></li>
								<li><a href={siteSetting.instagram} target="_blank">Instagram</a></li>
								<li><a href={siteSetting.facebook} target="_blank">Facebook</a></li>
								<li><a href={siteSetting.youtube} target="_blank">YouTube</a></li>
								<li><a href={siteSetting.twitter} target="_blank">Twitter</a></li>
							</ul>
							<a href='/' className='mc-back-to-menu-mobile' style={{display: 'none'}}><p>BACK TO MENU</p></a>
							<ul className='mc-navigation-mobile'>
								<NavigationItem display={'mobile'} selectedSection={selectedSection} selectArtist={selectArtist} selectSection={selectSection} title="Artists" section="/" />
								<NavigationItem display={'mobile'} selectedSection={selectedSection} selectSection={selectSection} title="About Us" section="/about" />
								<li><a onClick={this.thisMailingList.bind(this)} href="#">Mailing List</a></li>
								<li><a href='https://news.interlinerecords.com' target="_blank">News / Blog</a></li>
								<li><a onClick={this.openContact.bind(this)} href='#'>Contact</a></li>
								<li><a href={siteSetting.store} target="_blank">Store</a></li>
								<br/>
								<li><a href={siteSetting.soundcloud} target="_blank">Soundcloud</a></li>
								<li><a href={siteSetting.instagram} target="_blank">Instagram</a></li>
								<li><a href={siteSetting.facebook} target="_blank">Facebook</a></li>
								<li><a href={siteSetting.youtube} target="_blank">YouTube</a></li>
								<li><a href={siteSetting.twitter} target="_blank">Twitter</a></li>
							</ul>
							<p className='copyright desktop' >&copy; {new Date().getFullYear()} Interline Group, LLC</p>
						</div>
						<div className="col-sm-6">
							<div className="mc-content-wrapper">
								<ContentSection contact={this.openContact} general={general} selectedSection={selectedSection} selectArtist={selectArtist} artists={artists} />
							</div>
							<div className="mc-content-wrapper-mobile">
								<ContentSection contact={this.openContact} general={general} selectedSection={selectedSection} selectArtist={selectArtist} artists={artists} />
							</div>
							<p className='copyright mobile' >&copy; {new Date().getFullYear()} Interline Group, LLC</p>
						</div>
						<div className="col-md-2"></div>
					</div>
					<div className="row"></div>
				</div>
			</div>
    );
  }
}


export default MainContent