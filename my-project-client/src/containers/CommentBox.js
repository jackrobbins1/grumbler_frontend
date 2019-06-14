import React, { Component } from "react";
import CommentList from "../components/CommentList";
import Form from "../components/Form"

class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
  }

  handleCommentSubmit(submittedComment){
    submittedComment.id = Date.now()
    const updatedComments = [...this.state.data, submittedComment] // spread operator is ..., copies state then makes new one.
    this.setState({data: updatedComments})
  }

  render() {
    return (
      <div className="comment-box">
        <h2>Add a Complaint</h2>
        <Form onCommentSubmit = {this.handleCommentSubmit}/>
        <h2>Complaints</h2>
        <CommentList data={this.state.data} />
      </div>
    );
  }
}

export default CommentBox;