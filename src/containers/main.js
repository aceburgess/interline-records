import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import Home from '../components/home';
import MainContent from '../components/main-content';
import About from '../components/about';
import ArtistDetail from '../components/artist-detail';
import Privacy from '../components/privacy';

import {Fragment, push, go, replace} from 'redux-little-router';

class Main extends Component {

	pathName: 'artists'

	getPathName(){
		this.pathName = location.pathname.split('/');
	}

	mailingList(addToMailingList){
		// e.preventDefault();
		sessionStorage.mailingList = "opened";

		vex.dialog.prompt({
			unsafeMessage: '<h3>Subscribe to our mailing list</h3><p>Get pre-order info, discounts on music & events, and more from Interline Records!</p><br>',
			placeholder: 'Email Address',
			callback: function(value){
				if (value) {
					var response = addToMailingList(value);
					response.then(function(res, error){
						setTimeout(function(){vex.dialog.alert(res.payload.text)},1500);
						return true;
					})
				} else {
					console.log('Closing');
				}
			}
		});
	}

	componentWillMount() {
		this.getPathName();

		window.loadingScreen = function(){
			var loading = '<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'

			var loadingScreen = pleaseWait({
				logo: '/images/interline-logo.svg',
				backgroundColor: '#ffff47',
				loadingHtml: loading
			})

			return loadingScreen;
		}
	}

	checkIfLoaded(thisLoadingScreen) {
		var check = setInterval(function(){
			if (thisLoadingScreen.loaded) {
				thisLoadingScreen.finish();
				clearInterval(check);
			}
		}, 500);
	}

	componentWillUpdate(nextProps, nextState) {
		this.getPathName();
	}

	componentDidMount() {
		this.props.actions.requestGeneral();
		this.props.actions.requestArtists();
	}

	render() {

		var loadingScreen = window.loadingScreen;
		var checkIfLoaded = this.checkIfLoaded;

	  switch (this.pathName[1]) {
	    case '':
	    	push('/');
	      return (
  				<Fragment forRoute='/'>
  		  		<MainContent {...this.props} mailingList={this.mailingList} checkIfLoaded={checkIfLoaded} loadingScreen={loadingScreen} selectedSection="artist-list" />
  				</Fragment>
	      )
      case 'about':
      	push('/about');
      	return (
  				<Fragment forRoute='/about'>
  		  		<MainContent {...this.props} mailingList={this.mailingList} checkIfLoaded={checkIfLoaded} loadingScreen={loadingScreen} selectedSection="about-us" />
  				</Fragment>
      	)
    	case 'artist':
    		push('/artist');
    		return (
  				<Fragment forRoute='/artist'>
  		  		<ArtistDetail {...this.props} mailingList={this.mailingList} checkIfLoaded={checkIfLoaded} loadingScreen={loadingScreen} selectArtist={this.props.actions.selectArtist} artist={this.props.selectedArtist} artists={this.props.artists} />
  				</Fragment>
    		)
    	case 'privacy':
    		push('/privacy');
    		return (
    			<Fragment forRoute='/privacy'>
    				<Privacy />
    			</Fragment>
    		)
	    default:
	    	push('/');
	      return (
					<Fragment forRoute='/'>
			  		<MainContent {...this.props} mailingList={this.mailingList} checkIfLoaded={checkIfLoaded} loadingScreen={loadingScreen} selectedSection="artist-list" />
					</Fragment>
	      )
    }
	}
}

function mapStateToProps(state) {
	return {
    artists: state.rootReducer.artists.data,
    general: state.rootReducer.general.data,
    selectedArtist: state.rootReducer.artists.selectedArtist,
    modalState: state.rootReducer.general.modalState,
    selectedSection: state.rootReducer.general.selectedSection
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);