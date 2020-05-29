import React from "react";
import { connect } from "react-redux";
import "../app.css";
import { deleteFlashMessage } from "../actions";

class Flash extends React.Component {
	render() {
		if (this.props.flash) {
			const { type, messages } = this.props.flash;

			if (type === "error") {
				return (
					<div className="container">
						<div className="alert alert-danger small-margin-top" role="alert">
							{messages}
						</div>
					</div>
				);
			} else {
				return (
					<div className="container">
						<div className="alert alert-success small-margin-top" role="alert">
							{messages}
						</div>
					</div>
				);
			}
		}

		return <div></div>;
	}
}

const mapStateToProps = state => {
	return { flash: state.flash };
};

export default connect(mapStateToProps, { deleteFlashMessage })(Flash);
