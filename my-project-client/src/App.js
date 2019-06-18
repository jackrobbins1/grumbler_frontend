import React, { Component } from "react";
import "./App.css";
import CommentBox from "./containers/CommentBox";
import RestShowPage from "./containers/RestShowPage";
import Home from "./containers/Home";
import Login from "./containers/Login";
import CreateAcct from "./containers/CreateAcct";
import UserPage from "./containers/UserPage";
import CustomHome from "./containers/CustomHome";
import secretKey from "./secret/secret";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    user: {
      userID: undefined,
      username: undefined,
      email: undefined,
      complaint_id: []
    },
    currentPage: "home",
    gmapsLoaded: false
  };

  handleScriptCreate() {
    this.setState({ scriptLoaded: false });
  }

  handleScriptError() {
    this.setState({ scriptError: true });
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true });
  }

  initMap = () => {
    this.setState({
      gmapsLoaded: true
    });
  };

  componentDidMount() {
    window.initMap = this.initMap;
    const gmapScriptEl = document.createElement(`script`);
    gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=${secretKey}&libraries=places&callback=initMap`;
    document
      .querySelector(`body`)
      .insertAdjacentElement(`beforeend`, gmapScriptEl);
  }

  getLoginData = response => {
    this.setState({
      user: {
        userID: response.id,
        username: response.username,
        email: response.email
      }
    })
  }

  render() {
    return (
        <BrowserRouter >
          <div>
          <Navbar />
          {/* <NavBar />
          <Login />
          <CreateAcct /> */}
          {/* {this.state.gmapsLoaded && <Home />} */}
          {/* <UserPage userData={this.state.user} /> */}
          {/* <CreateAcct getLoginData={this.getLoginData} /> */}
          <Login getLoginData={this.getLoginData}/>
          

          </div>
        </BrowserRouter>
    );
  }
}

export default App;
