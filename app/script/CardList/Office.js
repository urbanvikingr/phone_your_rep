import React from 'react'
import ReactTooltip from 'react-tooltip'

export default function Office(props) {
  const office = props.office
  const officeTitle = office.city || office.office_type
  const phone = office.phone
  const address = office.address || "" 
  const suite = office.suite || ""
  const cityStateZip = (office.city ? office.city + ", " : "") + (office.state ? office.state + ", " : "") + (office.zip || "")
  const building = (office.building ? office.building + ", " : "")
  const hours = (office.hours ? "Hours: " + office.hours : "Hours?: Let us know on Twitter @phoneyourrep")
  const togglePanel = props.togglePanel
  const officeId = props.officeId
  const isHidden = (props.toggleOfficeId == officeId) ? "" : "hidden"
  const caret = (props.toggleOfficeId == officeId) ? "fa fa-minus fa-white card-office-btn-caret" :  "fa fa-plus fa-white card-office-btn-caret"

  return (
    <div className="card-office">
      <div className="card-office-btn" onClick={e => togglePanel(officeId)}>
        <div className="card-office-btn-office">
          <i className={caret} aria-hidden="true"></i>
          <h1 className="card-office-btn-name font-white">{officeTitle}</h1>
        </div>
        <a className="font-white" href={office.v_card_link}>
          <div className="card-office-btn-link" data-tip="Add to Contact List">
            <i className="fa fa-download fa-white" aria-hidden="true"></i>
          </div>
          <ReactTooltip />
        </a>
        <div className="spacer"></div>
      </div>
      <div className={"card-office-panel row " + isHidden}>
        <div className="row">
          <div className="col-6 card-office-panel-phone">
            <i className="fa fa-phone-square fa-icon fa-fw " aria-hidden="true"></i>
            <p>
              <a href={"tel:" + phone}>{phone}</a>
            </p>
          </div>
          <div className="col-6 card-office-panel-office ">
            <i className="fa fa-building fa-icon fa-fw " aria-hidden="true"></i>
            <p>{building}</p>
            <p>{address}</p>
            <p>{suite}</p>
            <p>{cityStateZip}</p>
          </div>
        </div>
        <div className="row card-office-panel-hours">
          <div className="col-12 ">
            <p className="font-white">{hours}</p>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  )
}
