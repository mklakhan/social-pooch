import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navbar, Nav, FormControl, Button, Container, Row, Col, Form } from 'react-bootstrap';

import {useHistory} from "react-router-dom"
import ReactLogo from '../logo.svg';
// import Nav from './Nav.css';

export default function NavComponent(){

  const history = useHistory()

  const go = (newPath) => { 
    history.push(newPath) }
   
  const youGottaCallHooks = useAuth()
  
    return(
        <Navbar bg="warning" variant="light">
              {/* <Navbar.Brand href="/">Social Pooch</Navbar.Brand> */}
        <Navbar.Brand href="/login">
              
      <img
        src={ReactLogo} alt="React Logo"
        width="30"
        height="30"
        className="d-inline-block align-top"
         
      />
      <span style={{color: "white"}} >Social Pooch</span>
    </Navbar.Brand>
              <Navbar.Collapse className="basic-navbar-nav">
              <Nav className="mr-auto">
              {youGottaCallHooks.currentUser
                ? <Nav.Link href="/login" onClick={youGottaCallHooks.logout}>Logout</Nav.Link>
                :<Nav.Link href="#" onClick={() => go("/login")}>Login</Nav.Link>
              }
                <Nav.Link href="#" onClick={() => go("/profile")}>My Profile</Nav.Link>
                <Nav.Link href="#" onClick={() => go("/findpetfriends")}>Find Pet Friends</Nav.Link>
                <Nav.Link href="#" onClick={() => go("/mypetfriends")}>My Pet Friends</Nav.Link>
        
              </Nav>
              </Navbar.Collapse>
            </Navbar>
    )
}
