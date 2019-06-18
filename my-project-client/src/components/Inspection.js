import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Card } from 'semantic-ui-react'
import "./componentStyles/inspection.css"

class Inspection extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  goToRestaurant = () => {

  }

  handleClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  renderInspection = () => {
    if (this.state.expanded) {
      return (
        <Card>
          <div onClick={this.handleClick}>
            {/* <div
              // This is where the link to the rest show page should go
              onClick={event =>
                this.props.handleRestClick(this.props.data.license_)
              }
            >
              {this.props.data.aka_name}
            </div> */}
            <Link to={{
              pathname: `/rest-show/${this.props.data.license_}/${this.props.user.userID}`,
            }}>{this.props.data.aka_name}</Link>
            <div>
              Date of Inspection: {this.props.data.inspection_date.slice(0, 10)}
            </div>
            <div>Results: {this.props.data.results}</div>
            <br />
            <div>
              Violations:{" "}
              {this.props.data.violations ? this.props.data.violations
                .toLowerCase()
                .split("|")
                .map(vio => (
                  <p>{vio}</p>
                ))
                :
                null}
            </div>
            <br />
          </div>
        </Card>
      );
    } else {
      return (
        <Card>
          <div onClick={this.handleClick}>
            {/* <div
              onClick={event =>
                this.props.handleRestClick(this.props.data.license_)
              }
            >
              {this.props.data.aka_name}
            </div> */}
            <Link to={{
              pathname: `/rest-show/${this.props.data.license_}/${this.props.user.userID}`,
            }}>{this.props.data.aka_name}</Link>
            <div>
              Date of Inspection: {this.props.data.inspection_date.slice(0, 10)}
            </div>
            <div>Results: {this.props.data.results}</div>
            <br />
          </div>
        </Card>
      );
    }
  };

  render() {
    return this.renderInspection();
  }
}

export default withRouter(Inspection);


// const data = {
//   address:
//   "1626 S HALSTED ST "
//   aka_name:
//   "DECOLORES RESTAURANT"
//   city:
//   "CHICAGO"
//   dba_name:
//   "DECOLORES RESTAURANT"
//   facility_type:
//   "Restaurant"
//   inspection_date:
//   "2019-06-17T00:00:00.000"
//   inspection_id:
//   "2293638"
//   inspection_type:
//   "Canvass"
//   latitude:
//   "41.85918260635193"
//   license_:
//   "2542896"
//   longitude:
//   "-87.64682982484355"
//   results:
//   "Pass w/ Conditions"
//   risk:
//   "Risk 1 (High)"
//   state:
//   "IL"
//   violations:
//   "5. PROCEDURES FOR RESPONDING TO VOMITING AND DIARRHEAL EVENTS - Comments: PREMISES HAS POLICY FOR CLEAN UP OF VOMITING AND DIARRHEAL EVENTS, BUT IS MISSING SOME OF THE NECESSARY ITEMS NEEDED/APPROPRIA…"
//   zip:
//   "60608"
// }