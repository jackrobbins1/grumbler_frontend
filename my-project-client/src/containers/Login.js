import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";


class Login extends Component {
    state = {
      username: '',
      email: '',
      loginSuccessful: false
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleCreateAccount = () => {
      const url = 'http://localhost:3000/api/v1/users/login'
      const data = {
        user: {
          username: this.state.username,
          email: this.state.email
        }
      }

      const fetchHeaders = {
        "Content-Type": "application/json"
      }

      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: fetchHeaders
      })
      .then(resp => resp.json())
      .then(result => {
        console.log("result: ", result)
        this.checkLoginResult(result)
        if (this.state.loginSuccessful === true) {
          this.props.getLoginData(result)
          this.props.history.push("/")
        }
      })
      .catch(error => {
        console.log(error)
      })
    }

    checkLoginResult = result => {
      if (!!result.errors === true) {
        alert("Login failed, please try another username and email")
      } else {
        this.setState({
          loginSuccessful: true
        })
      }
    }
  
    render() {
      return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h1' color='green' textAlign='center'>
              Grumbler
            </Header>
            <Header as='h3' color='green' textAlign='center'>
              Login
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input onChange={this.handleChange} fluid icon='user' iconPosition='left' placeholder='Username' name="username" />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  icon='mail'
                  iconPosition='left'
                  placeholder='Email'
                  name="email"
                  type='text'
                />

                <Button onClick={this.handleCreateAccount} color='green' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
            New to us? <a href='http://localhost:3000/create-account'>Sign Up</a>            </Message>
          </Grid.Column>
        </Grid>
      )
      
      
      
    }
  }
  
  export default withRouter(Login);