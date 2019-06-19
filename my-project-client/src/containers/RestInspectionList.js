import React, { Component } from "react";
import RestInspection from "../components/RestInspection";
import { Segment } from 'semantic-ui-react'


class RestInspectionList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderInspections = () =>
    this.props.allInspections.map(inspection => {
      return <RestInspection inspection={inspection} />;
    });
  // render() {
  //   return <div>{this.renderInspections()}</div>;
  // }
  render() {
    return <Segment.Group>{this.renderInspections()}</Segment.Group>;
  }
}

export default RestInspectionList;
