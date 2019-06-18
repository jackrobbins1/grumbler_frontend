import React, { Component } from "react";
import "./containerStyles/restShowStyle.css";
import CommentBox from "../containers/CommentBox";
import RestInspectionList from "./RestInspectionList";

// To get the restaurant id use this.props.match.params.lid
// To get the user id use this.props.match.params.uid

class RestShowPage extends Component {
  state = {
    restData: "",
    allInspections: []
  };

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log(this.props)
    // fetch(
    //   `https://data.cityofchicago.org/resource/4ijn-s7e5.json?license_=${
    //     this.props.license
    //   }`
    // )
    fetch(
      `https://data.cityofchicago.org/resource/4ijn-s7e5.json?license_=${
        this.props.match.params.lid
      }`
    )
      .then(resp => resp.json())
      .then(rest =>
        this.setState({
          restData: rest[0],
          allInspections: rest
        })
      );
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="restShowMain">
        <div className="restHeader">
          {/* <button onClick={this.props.handleBackButton}>Back</button> */}
          <button onClick={this.goBack}>Back</button>
          <br />
          {this.state.restData.aka_name}
          <br />
          {this.state.restData.address}
          <br />
          {this.state.restData.city}, {this.state.restData.state}{" "}
          {this.state.restData.zip}
        </div>

        <div className="restDetails">
          Here are details of the RESTAURANT
          <br />
          License Number: {this.state.restData.license_}
          <br />
          Facility Type: {this.state.restData.facility_type}
          <br />
          Risk Level: {this.state.restData.risk}
        </div>

        <div className="restInspections">
          <RestInspectionList allInspections={this.state.allInspections} />
        </div>

        <div className="restComplaints">
          Here is where the complaints from our rails back end will be
        </div>
      </div>

    );
  }
}

export default RestShowPage;
