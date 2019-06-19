import React, { Component } from "react";
import "./containerStyles/restShowStyle.css";
import CommentBox from "../containers/CommentBox";
import RestInspectionList from "./RestInspectionList";
import { Segment, Header, Button, Icon } from 'semantic-ui-react'

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
      <div className="superMain">
        <div className="restShowMain">
          
          <Segment.Group raised className="restHeader">
            <Segment>
              <Header as='h1'>
                {this.state.restData.aka_name}
              </Header>
              <Header.Subheader>
                {this.state.restData.address}
              </Header.Subheader>
              <Header.Subheader>
              {this.state.restData.city}, {this.state.restData.state}{" "}{this.state.restData.zip}
              </Header.Subheader>
            </Segment>

            <Segment>
              <Header as='h4'>
                {this.state.restData.aka_name} Details:
              </Header>
              <Header.Subheader>
                License Number: {this.state.restData.license_}
              </Header.Subheader>
              <Header.Subheader>
                Facility Type: {this.state.restData.facility_type}
              </Header.Subheader>
              <Header.Subheader>
                Risk Level: {this.state.restData.risk}
              </Header.Subheader>
            </Segment>

          </Segment.Group>

          <div className="restInspections">
            <RestInspectionList allInspections={this.state.allInspections} />
          </div>

          <div className="restComplaints">
            Here is where the complaints from our rails back end will be
          </div>

        </div>

        <Button onClick={this.goBack} className="backButton ui button" size='tiny'>
          <Icon name="left arrow" />
          Back
        </Button>

      </div>

    );
  }
}

export default RestShowPage;
