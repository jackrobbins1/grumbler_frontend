import React, { Component } from 'react';
import Inspection from '../components/Inspection'

class InspectionList extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         allInspecs: []
    //     }
    // }

    state = {
        allInspecs: []
    }

    componentDidMount() {
        this.setState({
            allInspecs: this.props.inspections
        })
    }

    // createInspectionItems = () => {
    //     this.props.inspections.map(insp => {
    //         return <Inspection key={insp.inspection_id} data={insp} />
    //     })
    // }

  
    render() {
        const inspectionsA = this.props.inspections.map(insp => {
            return <Inspection key={insp.inspection_id} data={insp} />
        })
      return (
        <div>
          {inspectionsA}
        </div>
        
      )
      
      
      
    }
  }
  
  export default InspectionList;