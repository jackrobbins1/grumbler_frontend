import React, { Component } from "react";
import "./containerStyles/homeStyle.css";
import InspectionList from "./InspectionList";
import secretKey from "../secret1/secret.js";
import LocationSearchInput from "../components/LocationSearchInput";

const recent25Inspecs =
  "https://data.cityofchicago.org/resource/4ijn-s7e5.json?$order=inspection_date DESC&$limit=25";

class Home extends Component {
  state = {
    recent25: [],
    searchResults: [],
    searchAddress: ""
  };

  componentDidMount() {
    fetch(recent25Inspecs)
      .then(resp => resp.json())
      .then(inspecs =>
        this.setState({
          recent25: inspecs
        })
      );
  }

  handleNewAddress = newAddress => {
    this.setState({
      searchAddress: newAddress
    });
    this.getResultsForAddress();
  };

  getResultsForAddress = () => {
    const addressResults = `https://data.cityofchicago.org/resource/4ijn-s7e5.json?$where=starts_with(address, '${
      this.state.searchAddress
    }')`;
    fetch(addressResults)
      .then(resp => resp.json())
      .then(inspecs =>
        this.setState({
          searchResults: inspecs
        })
      );
  };

  render() {
    return (
      <div>
        <div className="homeContainer">
          <div className="searchContainer">
            Search Container here
            <LocationSearchInput handleNewAddress={this.handleNewAddress} />
          </div>

          <div className="recentInspections">
            Recent Inspection list
            {/* <InspectionList inspections={this.state.recent25} /> */}
            <InspectionList
              inspections={
                this.state.searchResults.length === 0
                  ? this.state.recent25
                  : this.state.searchResults
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
