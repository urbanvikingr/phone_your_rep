import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import CardList from './CardList';
import Directory from './Directory';
import $ from 'jquery';
import 'imports?jQuery=jquery!geocomplete';
import './apiInfo';
import '../styles';
import '../styles/main.css';

var apiData;

document.getElementById("submit").addEventListener("click", submit);

/* For Directory

ReactDOM.render(
    <Directory/>,
	document.getElementById("directory")
)

*/




function submit() {

    var lat = document.getElementById('lat').value;
    var lng = document.getElementById('lng').value;

    var container = document.getElementById('root');
    container.innerHTML = "";
    getURL(lat, lng);
}

function getURL(lat, lng) {
    var request = new XMLHttpRequest();
    var url = `${apiUrl}reps?&lat=${lat}&long=${lng}`;

    request.open("GET", url);
    request.addEventListener("load", onLoad);
    request.addEventListener("error", onError);
    request.send();
}

function onLoad() {
    console.log("Success :)");
    apiData = JSON.parse(this.response);

    // Render Card List!
    ReactDOM.render(
        <CardList data={apiData}/>, document.getElementById('root'));

}
function onError() {
    console.log("Failure :(");
}

$(function() {
    $("#address").geocomplete({details: "form"});
});
