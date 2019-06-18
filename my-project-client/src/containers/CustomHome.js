import React, { Component } from 'react';

class Home extends Component {
    state = {

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