import React, { Component } from 'react';
import './App.css';
import CommentBox from "./containers/CommentBox";
import RestShowPage from './containers/RestShowPage';
import NavBar from './containers/NavBar';
import Home from './containers/Home';
import Login from './containers/Login';
import CreateAcct from './containers/CreateAcct';
import UserPage from './containers/UserPage';
import CustomHome from './containers/CustomHome'


class App extends Component {
  state = {
    user: {
      userID: undefined,
      username: undefined,
      email: undefined,
    },
    currentPage: "home"
  }

  render() {
    return (
      <div>
        {/* <NavBar />
        <Login />
        <CreateAcct /> */}
        <Home />
        {/* <UserPage   userData={this.state.user}/>  */}
        {/* <RestShowPage /> */}
      </div>

    )



  }
}

export default App;
