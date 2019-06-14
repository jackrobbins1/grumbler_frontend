import React, { Component } from 'react';
import './App.css';
import CommentBox from "./containers/CommentBox";
import RestShowPage from './components/RestShowPage'

class App extends Component {
  render() {
    return (
      <div>
        {/* <CommentBox /> */}
        <RestShowPage />
      </div>
      
    )
    
    
    
  }
}

export default App;
