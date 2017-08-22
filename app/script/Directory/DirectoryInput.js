import React from 'react';

export default function DirectoryInput(props) {
  return (
    <input
      name="address"
      type="text"
      id="address"
      className="form-input directory-input"
      placeholder="Enter name"
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
    />
  )
}