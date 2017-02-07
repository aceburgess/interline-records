import React, {Component} from 'react';
import Home from './home.component.jsx';
import Artist from '../artist/artist.component.jsx';
import About from './about.component.jsx';

const allArtistsAPIQuery = 'http://local-dev-application.com:8000/artists/?format=json';

class Main extends Component {
	componentDidMount() {
	  $('#fullpage').fullpage({
	    //Navigation
	    menu: '#menu',
	    lockAnchors: false,
	    anchors:['firstPage', 'secondPage'],
	    navigation: false,
	    navigationPosition: 'right',
	    navigationTooltips: ['firstSlide', 'secondSlide'],
	    showActiveTooltip: false,
	    slidesNavigation: true,
	    slidesNavPosition: 'bottom',

	    //Scrolling
	    css3: true,
	    scrollingSpeed: 700,
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
	    controlArrows: true,
	    // verticalCentered: false,
	    sectionsColor : ['#ccc', '#fff'],
	    // paddingTop: '0em',
	    // paddingBottom: '10px',
	    // fixedElements: '#header, .footer',
	    responsiveWidth: 0,
	    responsiveHeight: 0,
	    responsiveSlides: false,

	    //Custom selectors
	    sectionSelector: '.section',
	    slideSelector: '.slide',

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
      		<Artist allArtists={allArtistsAPIQuery}/>
      		<About />
			</div>
		);
	}
}

export default Main