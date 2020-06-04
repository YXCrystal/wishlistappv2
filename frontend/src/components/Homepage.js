import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteFlashMessage } from "../actions";
import "../app.css";

class Homepage extends React.Component {
	componentDidMount() {
		this.props.deleteFlashMessage();
	}

	render() {
		return (
			<div>
				<div className="header">
					<div className="container header_banner">
						<h1 className="header_banner--title"> Wishlist App </h1>
						<p className="header_banner--subtitle">
							Get the gifts you <em>actually</em> want
						</p>
						<Link to="/featured" className="btn btn_title">
							Find Gifts
						</Link>
					</div>
				</div>
				<div className="info">
					<div className="row info_row">
						<div className="col-md-4 info_column">
							<i className="fas fa-gift info_icon"></i>
							<p className="info_text"> Find amazing handmade gifts</p>
						</div>
						<div className="col-md-4 info_column">
							<i className="fas fa-heart info_icon"></i>
							<p className="info_text"> Share your wishlist with friends & family</p>
						</div>
						<div className="col-md-4 info_column">
							<i className="far fa-smile-beam info_icon"></i>
							<p className="info_text">
								Buy gifts <em> they </em> actually want!
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null, { deleteFlashMessage })(Homepage);
