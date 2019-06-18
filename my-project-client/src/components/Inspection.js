import React, { Component } from "react";

class Inspection extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  handleClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  renderInspection = () => {
    if (this.state.expanded) {
      return (
        <div onClick={this.handleClick}>
          <div
            onClick={event =>
              this.props.handleRestClick(this.props.data.license_)
            }
          >
            {this.props.data.aka_name}
          </div>
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
      );
    } else {
      return (
        <div onClick={this.handleClick}>
          <div
            onClick={event =>
              this.props.handleRestClick(this.props.data.license_)
            }
          >
            {this.props.data.aka_name}
          </div>
          <div>
            Date of Inspection: {this.props.data.inspection_date.slice(0, 10)}
          </div>
          <div>Results: {this.props.data.results}</div>
          <br />
        </div>
      );
    }
  };

  render() {
    return this.renderInspection();
  }
}

export default Inspection;
