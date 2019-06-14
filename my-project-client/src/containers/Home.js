import React, { Component } from 'react';
import './containerStyles/homeStyle.css';

const recent25Inspecs = "https://data.cityofchicago.org/resource/4ijn-s7e5.json?$order=inspection_date DESC&$limit=25"

class Home extends Component {
    state = {
        recent25: []
    }

    componentDidMount() {
        fetch(recent25Inspecs)
        .then(resp => resp.json())
        .then(inspecs => this.setState({
            recent25: inspecs
        }))
    }
  
    render() {
      return (
        <div>
          <div className="homeContainer">
              <div className="searchContainer">
                  Search Container here
                  <input type="text"/>
              </div>

              <div className="recentInspections">
                  Recent Inspection list
              </div>
          </div>
        </div>
        
      )
      
      
      
    }
  }
  
  export default Home;