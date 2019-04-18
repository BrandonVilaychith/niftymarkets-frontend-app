import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

// Components
import Navigation from "./components/Navigation.js";
import HomePage from "./components/Home/HomePage.js";
import ProfilePage from "./components/Profile/ProfilePage.js";
import RegisterPage from "./components/RegisterPage.js";
import LoginPage from "./components/LoginPage.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(App);
