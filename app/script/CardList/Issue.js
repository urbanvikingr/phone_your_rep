import React from 'react'
import networkMap from './constants'

export default function Issue(props) {
  return (
    <div className="radio">
      <label><input type="checkbox" id="number" data-issue={props.issue} onChange={props.handleChange.bind(this)}/> {props.issue}</label>
    </div>
  )
}
