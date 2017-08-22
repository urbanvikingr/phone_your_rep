import React from 'react';

export default function DirectoryListRow(props) {
  return (
    <li className="font-gray directory-list-member " onClick={props.onClick}>{props.rep.official_full}</li>
  )
}