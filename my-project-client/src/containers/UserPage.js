import React, { Component } from 'react';
import './containerStyles/userPagestyle.css'

import WatchedRestaurants from './watchedRestaurants'
import Form from '../components/Form'

import CommentBox from './CommentBox'

class UserPage extends Component {
    state = {
        user: {
        userId: "",
        Name: "",
        Email: "",
        Restaurants: [],
        Complaints: []
      }
    }

    componentDidMount(){
        fetch('http://localhost:3001/api/v1/users')
        .then(resp => resp.json())
        .then(rest => console.log(rest))
    }


        render() {
          return (
            <div className="userPageMain">
                <div className="userHeader">
                    {this.state.user.Name}'s Profile
                </div>

                <div className="userDetails">
                    My Details:
                    <br/>
                    Name:{this.state.user.Name}
                    <br/>
                    E-mail: {this.state.user.Email}

                </div>

                <div className="watchedRestaurants">
                    My Restaurants
                    <WatchedRestaurants myRestaurants={this.state.user.Restaurants}/>
                </div>

                <div className="userComplaints">
                    My Complaints:
                    <CommentBox comments={this.state.user.Complaints}/>

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