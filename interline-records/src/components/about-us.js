import React, {Component} from 'react';

class AboutUs extends Component {


	render() {

		return (
    	<div className="about-us" >
    		<h3>About Interline Records</h3>
    		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tortor nisi, tincidunt vel nunc quis, pharetra faucibus quam. Pellentesque a turpis tellus. Phasellus varius rutrum tincidunt. Aliquam consectetur tortor vitae facilisis commodo. Praesent et porttitor nisi. In commodo tristique mauris sed finibus. Nam lectus massa, pretium vel sapien at, mollis laoreet felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices nullam.</p>
    		<a href="#">Privacy Policy </a> | <a href="#"> Terms of Use</a>
    		<h3>Staff</h3>
    		<ul className="contact">
    			<li><i className="fa fa-pencil" aria-hidden="true"></i>Ace Burgess: <span className="job-title">Owner / President</span></li>
    			<li><i className="fa fa-pencil" aria-hidden="true"></i>Mia Min Yen: <span className="job-title">General Manager</span></li>
    			<li><i className="fa fa-pencil" aria-hidden="true"></i>Joseph Knipskern: <span className="job-title">Sound Engineer</span></li>
    			<li><i className="fa fa-pencil" aria-hidden="true"></i>Mor Mezrich: <span className="job-title">Sound Engineer</span></li>
    		</ul>
    		<h3>Other</h3>
    		<ul className="contact">
    			<li><i className="fa fa-pencil" aria-hidden="true"></i>Shapiro Bernstein: <span className="job-title">Publishing</span></li>
    			<li><i className="fa fa-pencil" aria-hidden="true"></i>Merlin: <span className="job-title">Distribution</span></li>
    			<li><i className="fa fa-pencil" aria-hidden="true"></i>A2IM: <span className="job-title">American Association of Independent Music</span></li>
    			<li><i className="fa fa-pencil" aria-hidden="true"></i>General Inquiries: <span className="job-title">info@interlinerecords.com</span></li>
  			</ul>
    	</div>
		)
	}

}

export default AboutUs