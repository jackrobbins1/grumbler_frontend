import React, { Component } from 'react';
import './containerStyles/restShowStyle.css';
import CommentBox from "../containers/CommentBox"

class RestShowPage extends Component {

  state = {
    restData:[]
  }

componentDidMount(){
  fetch(`https://data.cityofchicago.org/resource/4ijn-s7e5.json?license_=${this.props.license_}`)
  .then(resp => resp.json())
  .then(rest => this.setState({
      restData: rest
  }))
}


    render() {
      return (
        <div className="restShowMain">
            <div className="restHeader">
                {this.state.restData.aka_name}
                Location:
                {this.state.restData.address}
                {this.state.restData.city}, {this.state.restData.state} {this.state.restData.zip}
            </div>

            <div className="restDetails">
                Here are details of the RESTAURANT
                <br/>
                License Number: {this.state.restData.license_}
                <br/>
                Facility Type: {this.state.restData.facility_type}
                <br/>
                Risk Level: {this.state.restData.risk}

            </div>

            <div className="restInspections">
                Here is where the inspection cards will be for this restaurant
            </div>

            <div className="restComplaints">
                Here is where the complaints from our rails back end will be
                <CommentBox />
            </div>

        </div>
      )



    }
  }

  export default RestShowPage;
