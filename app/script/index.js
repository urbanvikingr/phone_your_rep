import React from 'react'
import ReactDOM from 'react-dom'
import Select from 'react-select'
import CardList from './CardList'
import Directory from './Directory'
import queryString from 'query-string'
import $ from 'jquery'
import { apiUrl } from './apiUrl'

import 'imports?jQuery=jquery!geocomplete'
import '../styles'
import '../styles/main.css'

const parsedQueryString = queryString.parse(location.search)

if (parsedQueryString.reps) {
  const repIds = parsedQueryString.reps
  const url = `${apiUrl}reps?official_ids=${repIds}`
  getURL(url)
}

document.getElementById("submit").addEventListener("click", submit)

ReactDOM.render(
  <Directory reps={[]} getURL={getURL}/>,
  document.getElementById("directory")
)

function submit() {
  const lat = document.getElementById('lat').value
  const lng = document.getElementById('lng').value
  const url = `${apiUrl}reps?&lat=${lat}&long=${lng}`
  getURL(url)
}

function getURL(url) {
  const request = new XMLHttpRequest()
  const container = document.getElementById('root')
  container.innerHTML = ""
  request.open("GET", url)
  request.addEventListener("load", onLoad)
  request.addEventListener("error", onError)
  request.send()
}

function onLoad() {
  console.log("Success2 :)")
  const apiData = JSON.parse(this.response)

  // Render Card List!
  ReactDOM.render(
    <CardList data={apiData}/>, document.getElementById('root')
  )
}

function onError() {
  console.log("Failure :(")
}

$(function() {
  $("#address").geocomplete({details: "form"})
})
