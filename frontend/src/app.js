import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ShowProducts from "./components/ShowProducts";
import ListingDetail from "./components/ListingDetail";
import Signup from "./components/Signup";
import "./app.css";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Navbar onSubmit={this.onSearchSubmit} />
				<Route path="/" exact component={Homepage} />
				<Route path="/signup" component={Signup} />
				<Route path="/login" component={Login} />
				<Route path="/search/:search_term" render={props => <ShowProducts />} />
				<Route path="/listing/:listing_id" render={props => <ListingDetail />} />
			</Router>
		);
	}
}

export default App;
