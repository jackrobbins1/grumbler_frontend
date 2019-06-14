import React, { Component } from 'react';

class Inspection extends Component {
    state = {

    }
  
    render() {
      return (
        <div>
          <div>Name: {this.props.data.aka_name}</div>
          <div>Date: {this.props.data.inspection_date}</div>
          <div>Details: {this.props.data.violations}</div>
          <br/>
        </div>
      )
      
      
      
    }
  }
  
  export default Inspection;