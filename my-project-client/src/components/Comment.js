import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <h4>{this.props.children}</h4>
        <p>{this.props.username}</p>
      </div>
    );
  }
}

export default Comment;