var apiData;

document.getElementById("submit").addEventListener("click", submit);

function submit(e){
	var lat = document.getElementById('lat').value;
	var lng = document.getElementById('lng').value;
	var state = document.getElementById('state').value;
	var container = document.getElementById('root');
	container.innerHTML = "";
	getURL(lat, lng, state);
}

function getURL(lat, lng, state){
	var request = new XMLHttpRequest();
	console.log(lat);
	console.log(lng);
	console.log(state);
	var url = `https://phone-your-rep.herokuapp.com/reps?&lat=${lat}&long=${lng}&state=${state}`;

	request.open("GET", url);
	request.addEventListener("load", onLoad);
	request.addEventListener("error", onError);
	request.send();
}
function onLoad(){
	console.log("Success :)");
	apiData = JSON.parse(this.response);
	// Fixes US House of Representatives STATE-District to US House
	apiData.forEach((card) => {
		if(card.role.substring(0, 28) == "United States Representative"){ card.role = "United States House";}
	});

	// Render Card List!
	ReactDOM.render(
	  	<CardList />,
	  	document.getElementById('root')
	);
}
function onError(){
	console.log("Failure :(");
}
	// Card component
const Card = React.createClass({
	getInitialState: function(){
		return ({ animation: "", "hidden": "hidden"});
	},
	componentWillMount: function(){
		var el = this;
		setTimeout(function(){ el.startAnimation(); }, this.props.wait);
	},
	startAnimation: function(){
		this.setState({ animation: "card-animation-start", "hidden": ""});
	},
	render: function(){
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
						</div>

						<div className="panel-body">
							<div className="cont-heading row">
								<img className="col-sm-3 cont-photo" src={this.props.contact.photo} />
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
});

const CardList = React.createClass({
	render: function(){
		const cards = apiData.map((contact,i ) => {
			return (
					<Card
						key={i}
						wait={250*i}
            contact={contact}
						cardId={i}
					/>
			);
		});
		return (

			<div className="row">
				{cards}
			</div>

		);
	}
});

const networkMap = {
	"youtube": {
		className: 'fa-youtube-play',
		baseUrl: 'https://www.youtube.com/user/'
	},
	"twitter": {
		className: 'fa-twitter',
		baseUrl: 'https://www.twitter.com/'
	},
	"facebook": {
		className: 'fa-facebook',
		baseUrl: 'https://www.facebook.com/'
	},
	"web": {
		className: 'fa-desktop',
		baseUrl: ''
	}
};

const Office = React.createClass({
	render(){
		var chevronClass = "fa fa-chevron-circle-down"
		var officeType = this.props.office.type.charAt(0).toUpperCase() + this.props.office.type.slice(1)
		var officeInfoId = "office-info" + this.props.officeId + this.props.cardId

		var address = (this.props.office.address ? this.props.office.address + ", " :"" ) + (this.props.office.suit ? this.props.office.suit + ", " : "") + (this.props.office.city ? this.props.office.city + ", " : "") + this.props.office.state;
		// + ", " + this.props.office.suit ? this.props.office.suit + ", " : "" + this.props.office.city ? this.props.office.city+ ", " :""  + this.props.office.state

		return(
			<div className="office">
				<div className="office-header">
					<a data-toggle="collapse" data-target={"#"+officeInfoId}><i className={chevronClass} aria-hidden="true"></i></a>
					<span className="contactDetails">{officeType} Office - {this.props.office.phone}</span>
					<a href={this.props.office.v_card_link}><i className="fa fa-address-card"></i></a>
				</div>
				<div id={officeInfoId} className="collapse">
					<p>Address: {address}</p>
					<p>Fax: {this.props.office.fax}</p>
					{/*District Type Office - Phone - Vcard */}
					{/* type
							address
							suit
							city
							state
					*/}
				</div>
			</div>
		)
	}

})


const SocialLink = React.createClass({
  render: function() {

		function _socialLink(link, network) {;
			var classes  = 'fa ' + network.className + ' fa-white';
			var url = network.baseUrl + link
			return (<a className="pull-right card-link" href={url}><i className={classes} aria-hidden="true"></i></a>);
		}

		if(this.props.link){
			return _socialLink(this.props.link, networkMap[this.props.type]);
		}

		return null;
  }
});

SocialLink.propTypes = {
	type: React.PropTypes.oneOf(Object.keys(networkMap)).isRequired
};
