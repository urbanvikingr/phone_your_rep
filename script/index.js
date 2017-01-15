import ReactDOM from 'react-dom';
import CardList from './CardList';

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
		<CardList data={apiData}/>,
		document.getElementById('root')
	);
}
function onError(){
	console.log("Failure :(");
}
