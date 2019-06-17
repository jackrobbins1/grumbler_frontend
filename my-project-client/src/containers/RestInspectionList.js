import React, { Component } from "react";
import RestInspection from "../components/RestInspection";

class RestInspectionList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderInspections = () =>
    this.props.allInspections.map(inspection => {
      return <RestInspection inspection={inspection} />;
    });
  render() {
    return <div>{this.renderInspections()}</div>;
  }
}
export default RestInspectionList;
