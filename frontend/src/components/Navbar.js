import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
	getListingsAndImages,
	getLoading,
	getTerm,
	clear,
	getUser,
} from "../actions/listingActions.js";

class Navbar extends React.Component {
	state = { keyword: "" };

	onFormSubmit = e => {
		e.preventDefault();
		this.props.clear();
		this.props.getLoading();
		this.props.getTerm(this.state.keyword);
		this.props.getListingsAndImages(this.state.keyword);
		this.props.history.push(`/search/${this.state.keyword}`);
	};

	onChangeInput = e => {
		this.setState({ keyword: e.target.value.toLowerCase() });
	};

	currentUser() {
		if (this.props.currentUser) {
			return (
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a className="nav-link" href="#">
							Profile
						</a>
					</li>
					<li className="nav-item">
						<Link to="/logout" className="nav-link">
							Logout
						</Link>
					</li>
				</ul>
			);
		} else {
			return (
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							Login
						</Link>
					</li>
					<li className="nav-itme">
						<Link to="/signup" className="nav-link">
							Signup
						</Link>
					</li>
				</ul>
			);
		}
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<Link to="/" className="navbar-brand">
						Wishlist App
					</Link>
					<ul className="navbar-nav">
						<li className="nav-item">
							<form onSubmit={this.onFormSubmit}>
								<input
									className="navbar_input"
									type="text"
									placeholder="Search Gifts"
									value={this.state.keyword}
									onChange={this.onChangeInput}
								/>
								<button className="fas fa-search navbar_button"></button>
							</form>
						</li>
					</ul>
					{this.currentUser()}
				</nav>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { currentUser: state.user.user };
};

export default connect(mapStateToProps, {
	getListingsAndImages,
	getLoading,
	getTerm,
	clear,
	getUser,
})(withRouter(Navbar));
