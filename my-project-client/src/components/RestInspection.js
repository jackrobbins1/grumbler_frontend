import React, { Component } from "react";
import { Segment } from 'semantic-ui-react'
import "./componentStyles/restInspection.css"


class RestInspection extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
      hover: false
    };
  }

  handleClick = () => {
    if (this.props.inspection.violations) {
      this.setState({
        expanded: !this.state.expanded
      });
    }
  };

  // renderInspection = () => {
  //   if (this.state.expanded) {
  //     return (
  //       <div onClick={this.handleClick}>
  //         {this.props.inspection.inspection_date.slice(0, 10)} |{" "}
  //         {this.props.inspection.results}
  //         <br />
  //         <div>
  //           Violations:{" "}
  //           {this.props.inspection.violations
  //             .toLowerCase()
  //             .split("|")
  //             .map(vio => (
  //               <p>{vio}</p>
  //             ))}
  //           <div />
  //           <br />
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div div onClick={this.handleClick}>
  //         {this.props.inspection.inspection_date.slice(0, 10)} |{" "}
  //         {this.props.inspection.results}
  //       </div>
  //     );
  //   }
  // };

  hoverOn = () => {
    this.setState({ hover: true });
  }

  hoverOff = () => {
    this.setState({ hover: false });    
  }

  renderInspection = () => {
    if (this.state.expanded) {
      return (
        <Segment onClick={this.handleClick} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff} >
          {this.props.inspection.inspection_date.slice(0, 10)} |{" "}
          {this.props.inspection.results}
          <br />
          <div>
            Violations:{" "}
            {this.props.inspection.violations
              .toLowerCase()
              .split("|")
              .map(vio => (
                <p>{vio}</p>
              ))}
            <div />
            <br />
          </div>
        </Segment>
      );
    } else {
      return (
        <Segment div onClick={this.handleClick}>
          {this.props.inspection.inspection_date.slice(0, 10)} |{" "}
          {this.props.inspection.results}
        </Segment>
      );
    }
  };

  render() {
    return this.renderInspection();
  }
}

export default RestInspection;
