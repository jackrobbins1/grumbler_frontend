import React, { Component } from 'react';
import './containerStyles/userPagestyle.css'

// import WatchedRestaurants from './WatchedRestaurants'
import Form from '../components/Form'

import CommentBox from './CommentBox'

class UserPage extends Component {
    // state = {
    // user: {
    //     user_id: "",
    //     username: "",
    //     email: "",
    //     restaurant_id: [],
        
    //   }
    // }

    // componentDidMount(){
    //     fetch('http://localhost:3001/api/v1/users/30')
    //     .then(resp => resp.json())
    //     .then(userData => {
    //         this.setState({
    //            user: {...userData}
    //         })
    //     })
    // }


        render() {
          return (
            <div className="userPageMain">
                <div className="userHeader">
                    {this.state.user.username}'s Profile
                </div>

                <div className="userDetails">
                    My Details:
                    <br/>
                    Name:{this.state.user.username}
                    <br/>
                    E-mail: {this.state.user.email}

                </div>

                <div className="watchedRestaurants">
                    My Restaurants
                   
                </div>

                <div className="userComplaints">
                    My Complaints:
                    <CommentBox comments={this.state.user.complaints}/>

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