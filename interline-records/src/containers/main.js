import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import Home from '../components/home';
import Artist from '../components/artist';
import About from '../components/about';
import ArtistDetail from '../components/artist-detail';
import SiteModal from '../components/site-modal';

class Main extends Component {

	componentDidMount() {
		this.props.actions.requestArtists();

		$.modal.defaults = {
		  closeExisting: true,    // Close existing modals. Set this to false if you need to stack multiple modal instances.
		  escapeClose: true,      // Allows the user to close the modal by pressing `ESC`
		  clickClose: true,       // Allows the user to close the modal by clicking the overlay
		  closeText: 'Close',     // Text content for the close <a> tag.
		  closeClass: '',         // Add additional class(es) to the close <a> tag.
		  showClose: false,        // Shows a (X) icon/link in the top-right corner
		  modalClass: "modal",    // CSS class added to the element being displayed in the modal.
		  spinnerHtml: null,      // HTML appended to the default spinner during AJAX requests.
		  showSpinner: true,      // Enable/disable the default spinner during AJAX requests.
		  fadeDuration: 800,     // Number of milliseconds the fade transition takes (null means no transition)
		  fadeDelay: 0.5          // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
		};

	  $('#fullpage').fullpage({
	    //Navigation
	    menu: '#menu',
	    lockAnchors: false,
	    anchors:['firstPage', 'secondPage', 'thirdPage'],
	    navigation: false,
	    navigationPosition: 'bottom',
	    navigationTooltips: ['firstSlide', 'secondSlide'],
	    showActiveTooltip: false,
	    slidesNavigation: true,
	    slidesNavPosition: 'bottom',

	    //Scrolling
	    css3: true,
	    scrollingSpeed: 800,
	    autoScrolling: true,
	    fitToSection: true,
	    fitToSectionDelay: 0,
	    scrollBar: false,
	    easing: 'easeInOutCubic',
	    easingcss3: 'ease',
	    loopBottom: false,
	    loopTop: false,
	    loopHorizontal: true,
	    continuousVertical: false,
	    continuousHorizontal: false,
	    scrollHorizontally: false,
	    interlockedSlides: false,
	    resetSliders: false,
	    fadingEffect: false,
	    normalScrollElements: '#element1, .element2',
	    scrollOverflow: false,
	    scrollOverflowOptions: null,
	    touchSensitivity: 15,
	    normalScrollElementTouchThreshold: 5,
	    bigSectionsDestination: null,

	    //Accessibility
	    keyboardScrolling: true,
	    animateAnchor: true,
	    recordHistory: true,

	    //Design
	    controlArrows: false,
	    // verticalCentered: false,
	    // sectionsColor : ['#ccc', '#fff', '#ccc'],
	    // paddingTop: '0em',
	    // paddingBottom: '10px',
	    // fixedElements: '#header, .footer',
	    responsiveWidth: 0,
	    responsiveHeight: 0,
	    responsiveSlides: false,

	    //Custom selectors
	    sectionSelector: '.fullpage-section',
	    slideSelector: '.fullpage-slide',

	    //events
	    onLeave: function(index, nextIndex, direction){},
	    afterLoad: function(anchorLink, index){},
	    afterRender: function(){},
	    afterResize: function(){},
	    afterResponsive: function(isResponsive){},
	    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
	    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	  });
	}
	render() {
		return (
      <div id="fullpage">
      		<Home />
      		<Artist selectArtist={this.props.actions.selectArtist} currentArtist={this.props.selectedArtist} artists={this.props.artists} />
      		<ArtistDetail artist={this.props.selectedArtist} artists={this.props.artists} />
      		<SiteModal modalState={this.props.modalState} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
    artists: state.artists.data,
    selectedArtist: state.artists.selectedArtist,
    modalState: state.artists.modalState
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);