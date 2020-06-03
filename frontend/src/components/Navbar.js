import React, { Profiler } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
	getListingsAndImages,
	getLoading,
	getTerm,
	clear,
	getUser,
} from "../actions/listingActions.js";
import { signOut } from "../actions/userActions";

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

	onSignOut = () => {
		this.props.signOut();
		this.props.history.push("/");
	};

	currentUser() {
		if (this.props.currentUser) {
			const profile = `/profile/${this.props.currentUser.username}`;
			return (
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link to={profile} className="nav-link">
							Profile
						</Link>
					</li>
					<li className="nav-item">
						<a onClick={this.onSignOut} href="#" className="nav-link">
							Logout
						</a>
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
					<li className="nav-item">
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
	return { currentUser: state.currentUser.user };
};

export default connect(mapStateToProps, {
	getListingsAndImages,
	getLoading,
	getTerm,
	clear,
	getUser,
	signOut,
})(withRouter(Navbar));
