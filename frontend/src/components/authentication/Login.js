import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentUser } from "../../actions/userActions.js";
import { deleteFlashMessage } from "../../actions";

import "../../app.css";

class Login extends React.Component {
	state = { username: "", password: "", errors: [] };

	componentDidMount() {
		this.props.deleteFlashMessage();
	}

	onFormSubmit = e => {
		e.preventDefault();

		axios
			.post("http://localhost:5000/api/login", {
				username: this.state.username,
				password: this.state.password,
			})
			.then(user => {
				this.props.getCurrentUser(user);
				this.props.history.push(`/profile/${this.state.username}`);
			})
			.catch(err =>
				this.setState({
					errors: [err.response.data.error.message],
				})
			);
	};

	onChangeUsername = e => {
		this.setState({ username: e.target.value });
	};

	onChangePassword = e => {
		this.setState({ password: e.target.value });
	};

	renderErrors() {
		return this.state.errors.map(err => {
			return (
				<div key={err.indexOf()} className="error_message">
					{err}
				</div>
			);
		});
	}

	render() {
		return (
			<div className="container">
				{this.renderErrors()}
				<form
					onSubmit={this.onFormSubmit}
					className="form"
					action="/signup"
					method="post"
				>
					<h1 className="form_title"> Login</h1>
					<div className="form_field">
						<label className="form_label" htmlFor="username">
							Username
						</label>
						<input
							onChange={this.onChangeUsername}
							className="form_input"
							type="text"
							name="username"
							value={this.state.username}
							required
						/>
					</div>

					<div className="form_field">
						<label className="form_label" htmlFor="password">
							Password
						</label>
						<input
							onChange={this.onChangePassword}
							className="form_input"
							type="password"
							name="password"
							required
						/>
					</div>
					<button className="btn btn_form">Login</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { user: state.listings.user };
};

export default connect(mapStateToProps, { getCurrentUser, deleteFlashMessage })(
	withRouter(Login)
);
