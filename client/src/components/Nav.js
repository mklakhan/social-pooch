import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navbar, Nav, FormControl, Button, Container, Row, Col, Form } from 'react-bootstrap';
import "./Nav.css"
import {useHistory} from "react-router-dom"


export default function NavComponent(){

  const history = useHistory()

  const go = (newPath) => { 
    history.push(newPath)

    
  }
 
  const youGottaCallHooks = useAuth()
  console.log(youGottaCallHooks)
    return(
        <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="/">Social Pooch</Navbar.Brand>
              <Nav className="mr-auto">
                
              {youGottaCallHooks.currentUser
                ? <Nav.Link href="/login" onClick={youGottaCallHooks.logout}>Logout</Nav.Link>
                :<Nav.Link href="#" onClick={() => go("/login")}>Login</Nav.Link>
              }
              {/* <Nav.Link href="/register">New Account</Nav.Link> */}
                {/* <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link href="/">Logout</Nav.Link> */}
                
                <Nav.Link href="#" onClick={() => go("/profile")}>My Profile</Nav.Link>
                <Nav.Link href="#" onClick={() => go("/findpetfriends")}>Find Pet Friends</Nav.Link>
                <Nav.Link href="#" onClick={() => go("/mypetfriends")}>My Pet Friends</Nav.Link>
              </Nav>
            </Navbar>
    )
} 