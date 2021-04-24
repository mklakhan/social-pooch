import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";

import FindPetFriends from "./components/FindPetFriends";
import Login from "./pages/Login";
import MyPetFriends from "./components/MyPetFriends";
import Register from "./pages/Register";
import Profile from "./components/Profile";
import { AuthProvider } from "./contexts/AuthContext";
import Nav from "./components/Nav";
import MyCarousel from "./components/MyCarousel";
// import ReactDOM from 'react-dom';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Nav />

    

          {/* <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="/">Social Pooch</Navbar.Brand>
              <Nav className="mr-auto">
              {isLoggedIn
                ? <Nav.Link href="/">Logout</Nav.Link>
                :<Nav.Link href="/login">Login</Nav.Link>
              } */}
          {/* <Nav.Link href="/register">New Account</Nav.Link> */}
          {/* <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link href="/">Logout</Nav.Link> */}
          {/* <Nav.Link href="/profile">My Profile</Nav.Link>
                <Nav.Link href="/findpetfriends">Find Pet Friends</Nav.Link>
                <Nav.Link href="/mypetfriends">My Pet Friends</Nav.Link>
              </Nav>
            </Navbar> */}

          <Switch>
            <Route exact path="/login" component={Login}>
              <Login />
            </Route>
            <Route path="/register" component={Register}>
              <Register />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route path="/mypetfriends">
              <MyPetFriends />
            </Route>
            <Route path="/findpetfriends">
              <FindPetFriends />
            </Route>
            <Route path="/mycarousel">
              <MyCarousel />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
