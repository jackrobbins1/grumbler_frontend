import React, { Component } from 'react';
import './containerStyles/userPagestyle.css'
import watchedRestaurants from './watchedRestaurants'
import CommentBox from './CommentBox'

class UserPage extends Component {
    state = {

    }

    render() {
      return (
        <div className="userPageMain">
            <div className="userHeader">
                NAME OF RESTAURANT
            </div>

            <div className="restDetails">
                Here are details of the RESTAURANT
                <br/>
                License Number:
                <br/>
                Facility Type:
                <br/>
                Risk Level:

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

export default UserPage;