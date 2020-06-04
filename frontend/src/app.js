import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Flash from "./components/Flash";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import ShowProducts from "./components/listings/ShowProducts";
import ListingDetail from "./components/listings/ListingDetail";
import Profile from "./components/users/Profile";
import "./app.css";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Navbar />
				<Flash />
				<Route path="/" exact component={Homepage} />
				<Route path="/signup" component={Signup} />
				<Route path="/login" component={Login} />
				<Route path="/featured" component={ShowProducts} />
				<Route path="/search/:search_term" component={ShowProducts} />
				<Route path="/listing/:listing_id" component={ListingDetail} />
				<Route path="/profile/:username" component={Profile} />
			</Router>
		);
	}
}

export default App;
