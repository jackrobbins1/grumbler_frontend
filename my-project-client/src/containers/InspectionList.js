import React, { Component } from 'react';
import Inspection from '../components/Inspection'

class InspectionList extends Component {
    state = {
        allInspecs: []
    }

    componentDidMount() {
        this.setState({
            allInspecs: this.props.inspections
        })
    }

    createInspectionItems = () => {
        return this.props.inspections.map(insp => {
            return (
                <Inspection key={insp.inspection_id} data={insp} />
            )
        })
    }

  
    render() {

      return (
        <div>
          {this.createInspectionItems()}
        </div>
        
      )

    }
  }
  
  export default InspectionList;