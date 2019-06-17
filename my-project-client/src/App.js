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
import secretKey from './secret/secret'


class App extends Component {
  state = {
    user: {
      userID: undefined,
      username: undefined,
      email: undefined,
    },
    currentPage: "home",
    gmapsLoaded: false,
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }
   
  handleScriptError() {
    this.setState({ scriptError: true })
  }
   
  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }

  initMap = () => {
    this.setState({
      gmapsLoaded: true,
    })
  }

  componentDidMount () {
    window.initMap = this.initMap
    const gmapScriptEl = document.createElement(`script`)
    gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=${secretKey}&libraries=places&callback=initMap`
    document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
  }

  render() {
    return (
      <div>
        {/* <NavBar />
        <Login />
        <CreateAcct /> */}
        {/* {this.state.gmapsLoaded && (
        <Home />)} */}
        <UserPage   userDatas={this.state.user}/> 
        {/* <RestShowPage /> */}
      </div>

    )



  }
}

export default App;
