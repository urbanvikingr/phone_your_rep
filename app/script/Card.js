import React from 'react';
import SocialLink from './SocialLink';
import OfficeList from './OfficeList';
import Portrait from './Portrait.js';
import Name from './Name.js';
import Share from "./Share.js";
// Card component
export default class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            animation: "",
            "hidden": "hidden-opacity"
        };
    }

    componentWillMount() {
        var el = this;
        setTimeout(function() {
            el.startAnimation();
        }, this.props.wait);
    }
    startAnimation() {
        this.setState({animation: "card-animation-start", "hidden": ""});
    }
    render() {
        var contact = this.props.contacts;
        var partyInitial = this.props.contact.party.charAt(0);
        function party(partyInitial){
          if (partyInitial != "R" && partyInitial != "D") {
            return "I"
          }else{
            return partyInitial
          }
        };
		var url = "http://www.phoneyourrep.com?rep=" + this.props.contact.official_id;

        return (
			<div className={"col-12 center " + this.state.animation + " " + this.state.hidden}>
				<div className="card row">
					<div className="col-4">
						<Portrait link={this.props.contact.photo}></Portrait>

						<div className="card-social">
							<SocialLink type="web" link={this.props.contact.url}/>
							<SocialLink type="youtube" link={this.props.contact.youtube}/>
							<SocialLink type="twitter" link={this.props.contact.twitter}/>
							<SocialLink type="facebook" link={this.props.contact.facebook}/>
							<SocialLink type="instagram" link={this.props.contact.instagram}/>
							<SocialLink type="google-plus" link={this.props.contact.googleplus}/>
						</div>

						<Share url={url} />
					</div>
					<div className="col-8">
						<Name party={party(partyInitial)} name={this.props.contact.official_full} chamber={this.props.contact.role}></Name>

						<OfficeList offices={this.props.contact.office_locations} ></OfficeList>

					</div>
				</div>
			</div>
        );
    }
};
