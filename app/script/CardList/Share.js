import React from 'react';

export default function Share(props) {
  return (
    <a className="card-share-link" href={props.url} target="blank">
      <i className="fa fa-icon fa-share-square-o" aria-hidden="true"></i>
      Share
    </a>
  );
};
