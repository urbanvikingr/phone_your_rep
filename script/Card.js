import React from 'react';
import SocialLink from './SocialLink';
import Office from './Office';
	// Card component
export default class Card extends React.Component{
  constructor() {
		super();
    this.state = { animation: "", "hidden": "hidden"};
  }

  componentWillMount() {
		var el = this;
		setTimeout(function(){ el.startAnimation(); }, this.props.wait);
	}
  startAnimation() {
		this.setState({ animation: "card-animation-start", "hidden": ""});
	}
	render(){
    var contact = this.props.contacts;
    var party = this.props.contact.party.charAt(0)

		return (
				<div className= {"col-md-6 col-md-offset-3 " + this.state.animation + " " + this.state.hidden}>
					<div className="panel panel-primary">
						<div className="panel-heading">
							<p className="d-inline-block m-0">{this.props.contact.role}</p>
							<SocialLink type="web" link={this.props.contact.url}/>
							<SocialLink type="youtube" link={this.props.contact.youtube}/>
							<SocialLink type="twitter" link={this.props.contact.twitter}/>
							<SocialLink type="facebook" link={this.props.contact.facebook}/>
              <SocialLink type="instagram" link={this.props.contact.instagram}/>
              <SocialLink type="google-plus" link={this.props.contact.googleplus}/>
						</div>
            <div className="panel-body">
							<div className="cont-heading row">
								<img className="col-xs-4 col-md-3 cont-photo" src={this.props.contact.photo} />
								<div className="col-sm-8-offset-1">
									<h3 className="text-center m-0"> {this.props.contact.official_full + " - (" + party +")" } </h3>
								</div>
							</div>
							<div className="row">
								<div className="offices col-8-xs-offset-2">
									{this.props.contact.office_locations.map((office, i)=>{return (<Office key={i} office={office} officeId={i} cardId={this.props.cardId}/>)})}
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
};
