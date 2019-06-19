import React, { Component } from "react";
import { Segment } from 'semantic-ui-react'
import "./componentStyles/restInspection.css"


class RestInspection extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
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


  renderInspection = () => {
    if (this.state.expanded) {
      return (
        <Segment onClick={this.handleClick} className="onHover" >
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
        <Segment className="onHover" onClick={this.handleClick}>
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
