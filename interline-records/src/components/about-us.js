import React, {Component} from 'react';
import StaffCompany from './staff-company';

class AboutUs extends Component {


	render() {
        var count = 0;

        var { general } = this.props;
        var siteSetting = general.sitesetting[0];
        var staffMembers = general.staff;
        var companies = general.company;

        staffMembers.map( (staff) =>
            console.log(staff)
        )

		return (
    	<div className="about-us" >
    		<h3>About Interline Records</h3>
    		<p>{siteSetting.about_us}</p>
    		<a href="#">Privacy Policy </a> | <a href="#"> Terms of Use</a>
    		<h3 className="staff">Staff</h3>
    		<ul className="contact staff">
                {staffMembers.map( (staff) =>
                    <StaffCompany key={count +=1} name={staff.first_name + ' ' + staff.last_name} link={'mailto:' + staff.email} description={staff.job_title} />
                )}
    		</ul>
    		<h3 className="other">Other</h3>
    		<ul className="contact other">
                {companies.map( (company) =>
                    <StaffCompany type={'company'} key={count +=1} name={company.name} link={company.website} description={company.business_type}/>
                )}
  			</ul>
    	</div>
		)
	}

}

export default AboutUs