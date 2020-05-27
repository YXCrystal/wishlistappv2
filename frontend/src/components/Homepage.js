import React from "react";
import { Link } from "react-router-dom";
import "../app.css";

class Homepage extends React.Component {
	state = { users: [] };

	render() {
		return (
			<div className="header">
				<div className="container header_banner">
					<h1 className="header_banner--title"> Wishlist App </h1>
					<p className="header_banner--subtitle">
						Get the gifts you <em>actually</em> want
					</p>
					<Link to="/listings" className="btn btn_title">
						Find Gifts
					</Link>
				</div>
			</div>
		);
	}
}

export default Homepage;
