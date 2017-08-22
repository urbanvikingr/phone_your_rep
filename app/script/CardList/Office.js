import React from 'react';
import ReactTooltip from 'react-tooltip';

export default function Office(props) {
  var office = (props.office.city ? props.office.city : props.office.office_type);
  var tel_link = "tel:" + props.office.phone;
  var address = (props.office.address ? props.office.address : "" );
  var suite = (props.office.suite ? props.office.suite : "")
  var cityStateZip = (props.office.city ? props.office.city + ", " : "") + (props.office.state ? props.office.state + ", " : "") + (props.office.zip ? props.office.zip : "");
  var building = (props.office.building ? props.office.building + ", " : "");
  var hours = (props.office.hours ? "Hours: " + props.office.hours : "Hours?: Let us know on Twitter @phoneyourrep");

  var togglePanel = props.togglePanel;
  var officeId = props.officeId;
  var isHidden = (props.toggleOfficeId == officeId) ? "" : "hidden";
  var caret = (props.toggleOfficeId == officeId) ? "fa fa-minus fa-white card-office-btn-caret" :  "fa fa-plus fa-white card-office-btn-caret"

  return (
    <div className="card-office">
      <div className="card-office-btn" onClick={function(e){ togglePanel(officeId); }}>
        <div className="card-office-btn-office">
          <i className={caret} aria-hidden="true"></i>
          <h1 className="card-office-btn-name font-white">{office}</h1>
        </div>

        <a className="font-white" href={props.office.v_card_link}>
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
              <a href={tel_link}>{props.office.phone}</a>
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
};
