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
      fetch request to backend************
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

            </div>
          )
  }
}

  export default UserPage;
