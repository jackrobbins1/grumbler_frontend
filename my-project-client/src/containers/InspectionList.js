import React, { Component } from "react";
import Inspection from "../components/Inspection";
import RestShowPage from "./RestShowPage";

class InspectionList extends Component {
  state = {
    allInspecs: [],
    showRest: false,
    restNum: ""
  };

  handleBackButton = () => {
    this.setState({
      showRest: !this.state.showRest
    });
  };

  handleRestClick = _license => {
    this.setState({
      restNum: _license,
      showRest: !this.state.showRest
    });
  };

  renderControl = () => {
    if (this.state.showRest) {
      return (
        <RestShowPage
          handleBackButton={this.handleBackButton}
          license={this.state.restNum}
        />
      );
    } else {
      return <div>{this.createInspectionItems()}</div>;
    }
  };
  componentDidMount() {
    this.setState({
      allInspecs: this.props.inspections
    });
  }

  createInspectionItems = () => {
    return this.props.inspections.map(insp => {
      return (
        <Inspection
          key={insp.inspection_id}
          data={insp}
          handleRestClick={this.handleRestClick}
        />
      );
    });
  };

  render() {
    return <div>{this.renderControl()}</div>;
  }
}

export default InspectionList;
