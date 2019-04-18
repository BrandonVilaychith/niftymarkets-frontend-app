import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

// Components
import Navigation from "./components/Navigation.js";
import HomePage from "./components/HomePage.js";
import ProfilePage from "./components/Profile/ProfilePage.js";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Navigation />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/profile' component={ProfilePage} />
				</Switch>
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
