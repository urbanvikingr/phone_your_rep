import React from 'react'
import networkMap from './constants'

export default const Issue = props => (
  <div className="radio">
    <label><input type="checkbox" id="number" data-issue={props.issue} onChange={props.handleChange.bind(this)}/> {props.issue}</label>
  </div>
)
