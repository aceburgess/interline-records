import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import Home from '../components/home';
import Artist from '../components/artist';
import About from '../components/about';

class Main extends Component {

	componentDidMount() {
		this.props.actions.requestArtists();

	  $('#fullpage').fullpage({
	    //Navigation
	    menu: '#menu',
	    lockAnchors: false,
	    anchors:['firstPage', 'secondPage'],
	    navigation: false,
	    navigationPosition: 'bottom',
	    navigationTooltips: ['firstSlide', 'secondSlide'],
	    showActiveTooltip: false,
	    slidesNavigation: true,
	    slidesNavPosition: 'bottom',

	    //Scrolling
	    css3: true,
	    scrollingSpeed: 500,
	    autoScrolling: true,
	    fitToSection: true,
	    fitToSectionDelay: 1000,
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
	    sectionsColor : ['#ccc', '#fff'],
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
      		<About />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
    artists: state.artists.data,
    selectedArtist: state.artists.selectedArtist
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);