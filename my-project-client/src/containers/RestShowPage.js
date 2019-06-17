import React, { Component } from "react";
import "./containerStyles/restShowStyle.css";
import CommentBox from "../containers/CommentBox";
import RestInspectionList from "./RestInspectionList";

class RestShowPage extends Component {
  state = {
    restData: "",
    allInspections: []
  };

  componentDidMount() {
    fetch(
      `https://data.cityofchicago.org/resource/4ijn-s7e5.json?license_=${
        this.props.license
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

  render() {
    return (
      <div className="restShowMain">
        <div className="restHeader">
          <button onClick={this.props.handleBackButton}>Back</button>
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
