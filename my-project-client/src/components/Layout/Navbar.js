import "../componentStyles/navbar.css"
import React from 'react';
import { NavLink } from "react-router-dom"
import { Container, Image, Menu } from 'semantic-ui-react';


const Navbar = () => (
  <Menu>
    <Container className='mainContainer'>
      <Menu.Item as="a" Header as='h1' color='white' textAlign='center' position="center">
        <NavLink to="/" className='font'>Grumbler</NavLink>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item as="a" name="Login" color='white'>
          <NavLink to="/login" className='font'>Login</NavLink>
        </Menu.Item>

        <Menu.Item position="left" as="a" name="Create New Account" color='white'>
          <NavLink to="/create-account" className='font'>Create Account</NavLink>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default Navbar 
