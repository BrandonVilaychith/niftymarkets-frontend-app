import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
	render() {
		console.log(this.props);
		return (
			<div className='App'>
				{this.props.items.map(item => (
					<p>{item}</p>
				))}
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
