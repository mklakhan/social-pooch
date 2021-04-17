import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navbar, Nav, FormControl, Button, Container, Row, Col, Form } from 'react-bootstrap';


export default function NavComponent(){
 
  const youGottaCallHooks = useAuth()
    return(
        <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="/">Social Pooch</Navbar.Brand>
              <Nav className="mr-auto">
                
              {youGottaCallHooks.currentUserStr
                ? <Nav.Link href="/login" onClick={youGottaCallHooks.logout}>Logout</Nav.Link>
                :<Nav.Link href="/login">Login</Nav.Link>
              }
              {/* <Nav.Link href="/register">New Account</Nav.Link> */}
                {/* <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link href="/">Logout</Nav.Link> */}
                
                <Nav.Link href="/profile">My Profile</Nav.Link>
                <Nav.Link href="/findpetfriends">Find Pet Friends</Nav.Link>
                <Nav.Link href="/mypetfriends">My Pet Friends</Nav.Link>
              </Nav>
            </Navbar>
    )
} 