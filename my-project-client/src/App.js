import React, { Component } from "react";
import "./App.css";
import 'semantic-ui-css/semantic.min.css'
import CommentBox from "./containers/CommentBox";
import RestShowPage from "./containers/RestShowPage";
import Home from "./containers/Home";
import Login from "./containers/Login";
import CreateAcct from "./containers/CreateAcct";
import UserPage from "./containers/UserPage";
import CustomHome from "./containers/CustomHome";
import secretKey from "./secret1/secret";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    user: {
      userID: 0,
      username: undefined,
      email: undefined,
      complaint_id: []
    },
    loginSuccess: false,
    currentPage: "home",
    gmapsLoaded: false,
    currentRestData: {}
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
      },
      loginSuccess: true
    })
  }

  getCurrentRest = data => {
    this.setState({
      currentRestData: data
    })
    this.history.push("/")
  }

  render() {
    return (
        <BrowserRouter >
        <Navbar />
          <div>
            <Route exact path="/" component={() => this.state.gmapsLoaded && <Home getCurrentRest={this.getCurrentRest} user={this.state.user} />} />
            <Route exact path="/login" component={() => <Login getLoginData={this.getLoginData}/>}/>
            <Route exact path="/create-account" component={CreateAcct} />
            <Route exact path="/user-page" component={() => <UserPage userData={this.state.user} />} />

            {/* <Route path="/rest-show/:lid" component={() => <RestShowPage getLoginData={this.getLoginData}/>} /> */}
            <Route path="/rest-show/:lid/:uid" component={RestShowPage} />

            {/* {this.state.gmapsLoaded && <Home />} */}
            {/* <UserPage userData={this.state.user} /> */}
            {/* <CreateAcct getLoginData={this.getLoginData} /> */}
            {/* <Login getLoginData={this.getLoginData}/> */}
          
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
