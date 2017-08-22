import React from 'react'

export default function SocialLink(props) {
  return (
    <div className="card-name">
      <h3 className="card-member">
        {props.name}
      </h3>
      <p className="card-chamber">
        {props.chamber}
      </p>
      <img className="card-party" src={require('../../images/' + props.partyInitial.toLowerCase() + '.png')}></img>
    </div>
  )
}
