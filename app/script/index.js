import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import CardList from './CardList';
// import Directory from './Directory';

import $ from 'jquery';
import 'imports?jQuery=jquery!geocomplete';
import './apiInfo';
import '../styles';
import '../styles/main.css';

const queryString = require('query-string');
const parsedQueryString = queryString.parse(location.search);

var apiData;

if (parsedQueryString.rep) {
  var rep = parsedQueryString.rep
  var url = `${apiUrl}reps/${rep}`;

  getURL(url)
}

document.getElementById("submit").addEventListener("click", submit);

// ReactDOM.render(
//     <Directory reps={Reps} />,
// 	document.getElementById("directory")
// )



function submit() {

    var lat = document.getElementById('lat').value;
    var lng = document.getElementById('lng').value;
    var url = `${apiUrl}reps?&lat=${lat}&long=${lng}`;

    getURL(url);
}

function getURL(url) {
    var request = new XMLHttpRequest();
    var container = document.getElementById('root');
    container.innerHTML = "";
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
