import React, {Component} from "react";

//change 

class Form extends Component{

constructor(props) {
super(props)
this.state = {
    username: "",
    text: ""
}
this.handleUsernameChange = this.handleUsernameChange.bind(this)
this.handleTextChange = this.handleTextChange.bind(this)
this.handleSubmit = this.handleSubmit.bind(this)


}

handleUsernameChange(e){
    this.setState({username: e.target.value})
}

handleTextChange(e){
    this.setState({text: e.target.value})
}

handleSubmit(e){
    e.preventDefault();
    const newComment = {username: this.state.username, text: this.state.text}
    this.props.onCommentSubmit(newComment)
    this.setState({username: "", text: ""})
    // run callback in props passing in new Complaint
}

    render(){
        return(
            <form 
            className="comment-form"
            onSubmit={this.handleSubmit}
            >
            
            <input
            type="text"
            placeholder="Your name"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            />
            <input
            type = "text"
            placeholder= "Tell us how you really feel..."
            value={this.state.text}
            onChange={this.handleTextChange}
            />
            <input
            type="submit"
            value="Post"
            />
            </form>
        )
    }
}


export default Form;