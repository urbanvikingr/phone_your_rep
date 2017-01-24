import React from 'react';
import SocialLink from './SocialLink';
import Office from './Office';
import Portrait from './Portrait.js';
import Name from './Name.js'
// Card component
export default class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            animation: "",
            "hidden": "hidden"
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
        var party = this.props.contact.party.charAt(0);

        return (
			<div className={"col-12 center " + this.state.animation + " " + this.state.hidden}>
				<div className="card row">
					<div className="col-4">
						<Portrait link={this.props.contact.photo}></Portrait>
					</div>
					<div className="col-8">
						<Name party={party} name={this.props.contact.official_full} office={this.props.contact.role}></Name>

						<div className="offices col-8-xs-offset-2">
							{this.props.contact.office_locations.map((office, i) => {
								return (<Office key={i} office={office} officeId={i} cardId={this.props.cardId}/>)
							})}
						</div>

						<div className="card-social">
							<SocialLink type="web" link={this.props.contact.url}/>
							<SocialLink type="youtube" link={this.props.contact.youtube}/>
							<SocialLink type="twitter" link={this.props.contact.twitter}/>
							<SocialLink type="facebook" link={this.props.contact.facebook}/>
							<SocialLink type="instagram" link={this.props.contact.instagram}/>
							<SocialLink type="google-plus" link={this.props.contact.googleplus}/>
						</div>
					</div>

				</div>
			</div>
        );
    }
};
