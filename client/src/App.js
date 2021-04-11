import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from "./logo.svg";
// import "./App.css";
import { Navbar, Nav, FormControl, Button, Container, Row, Col, Form } from 'react-bootstrap'
import FindPetFriends from "./components/FindPetFriends";
import Login from "./components/Login";
import MyPetFriends from "./components/MyPetFriends";
import NewAccount from "./components/NewAccount";
import Profile from "./components/Profile";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="App">
      <main>
        <Router>
          <div>
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="/">Social Pooch</Navbar.Brand>
              <Nav className="mr-auto">
              {isLoggedIn
                ? <Nav.Link href="/">Logout</Nav.Link>
                :<Nav.Link href="/">Login</Nav.Link>
              }
                {/* <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link href="/">Logout</Nav.Link> */}
                <Nav.Link href="/profile">My Profile</Nav.Link>
                <Nav.Link href="/newaccount">New Account</Nav.Link>
                <Nav.Link href="/findpetfriends">Find Pet Friends</Nav.Link>
                <Nav.Link href="/mypetfriends">My Pet Friends</Nav.Link>
              </Nav>
            </Navbar>



            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/newaccount">
                <NewAccount />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/mypetfriends">
                <MyPetFriends />
              </Route>
              <Route path="/findpetfriends">
                <FindPetFriends />
              </Route>
            </Switch>
          </div>
        </Router>
      </main>
      <footer>
        Social Pooch 2021
      </footer>
    </div>
  );
}


export default App;
