var apiData;

document.getElementById("submit").addEventListener("click", click);

function click(e){
	var address = document.getElementById('address').value;
	getURL(address);
}
function getURL(address){
	var request = new XMLHttpRequest();
	console.log(address);
	var url = "https://aqueous-anchorage-20771.herokuapp.com/reps?address={"+address+"}";

	request.open("GET", url);
	request.addEventListener("load", onLoad);
	request.addEventListener("error", onError);
	request.send();
}
function onLoad(){
	console.log("Success :)");
	apiData = JSON.parse(this.response);
	console.log(apiData);
	// Render Card List!
	ReactDOM.render(
	  	<CardList />,
	  	document.getElementById('root')
	);
}
function onError(){
	console.log("Failure :(");
}

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
		return (
				<div className= {"col-md-6 col-md-offset-3 " + this.state.animation + " " + this.state.hidden}>
					<div className="panel panel-primary">
						<div className="panel-heading">
							<p className="d-inline-block m-0">{this.props.office}</p>

							<a className="pull-right card-link" href={this.props.url}><i className="fa fa-desktop fa-white" aria-hidden="true"></i></a>
							<a className="pull-right card-link" href={this.props.youtube}><i className="fa fa-youtube-play fa-white" aria-hidden="true"></i></a>
							<a className="pull-right card-link" href={this.props.twitter}><i className="fa fa-twitter fa-white" aria-hidden="true"></i></a>
							<a className="pull-right card-link" href={this.props.facebook}><i className="fa fa-facebook-official fa-white" aria-hidden="true"></i></a>
						</div>
						<div className="panel-body">
							<h3>{this.props.name}</h3>
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
						name={contact.name}
						office={contact.office}
						url={contact.url}
						twitter={"https://www.twitter.com/"+contact.twitter}
						facebook={"https://www.facebook.com/"+contact.facebook}
						youtube={"https://www.youtube.com/user/"+contact.youtube}
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
