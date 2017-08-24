import React from 'react'
import SocialLink from './SocialLink'
import OfficeList from './OfficeList'
import Portrait from './Portrait.js'
import Name from './Name.js'
import Share from "./Share.js"

// Card component
export default class Card extends React.Component {
  constructor() {
    super()
    this.state = {
      animation: "",
      "hidden": "hidden-opacity"
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.startAnimation()
    }, this.props.wait)
  }

  startAnimation() {
    this.setState({animation: "card-animation-start", "hidden": ""})
  }

  render() {
    const contact = this.props.contact
    const partyInitial = contact.party.charAt(0) != "R" && contact.party.charAt(0) != "D" ? "I" : contact.party.charAt(0)
    const shareUrl = "http://www.phoneyourrep.com?reps=" + contact.official_id

    return (
      <div className={"col-12 center " + this.state.animation + " " + this.state.hidden}>
        <div className="card row">
          <div className="col-4">
            <Portrait link={contact.photo} />
            <div className="card-social">
              <SocialLink type="web" link={contact.url} />
              <SocialLink type="youtube" link={contact.youtube} />
              <SocialLink type="twitter" link={contact.twitter} />
              <SocialLink type="facebook" link={contact.facebook} />
              <SocialLink type="instagram" link={contact.instagram} />
              <SocialLink type="google-plus" link={contact.googleplus} />
            </div>
            <Share url={shareUrl} />
          </div>
          <div className="col-8">
            <Name partyInitial={partyInitial} name={contact.official_full} role={contact.role} state={contact.state.name} />
            <OfficeList offices={contact.office_locations} />
          </div>
        </div>
      </div>
    )
  }
}
