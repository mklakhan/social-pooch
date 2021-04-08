import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import FindPetFriends from "./components/FindPetFriends";
import Login from "./components/Login";
import MyPetFriends from "./components/MyPetFriends";
import NewAccount from "./components/NewAccount";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header>
        This is the header
      </header>
      <main>
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/newaccount">New Account</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/mypetfriends">My Pet Friends</Link>
          </li>
          <li>
            <Link to="/findpetfriends">Find Pet Friends</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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
