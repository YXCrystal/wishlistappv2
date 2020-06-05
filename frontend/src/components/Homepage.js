import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteFlashMessage } from "../actions";
import Signup from "./authentication/Signup.js";
import Flash from "./Flash";
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
				<div className="testimonial">
					<h1 className="testimonial_header">Testimonials</h1>
					<div className="row testimonial_row">
						<div className="col-md-4 testimonial_column">
							<div className="card testimonial_card">
								<img
									className="testimonial_avatar"
									src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
									alt="smiling man"
								/>
								<div className="card-body">
									<p className="card-text">
										Finally an easy way to find out what my friends & family want without
										needing to ask them! I love how I can keep it a surprise and get them
										something they always wanted!
									</p>
									<p className="testimonial_author"> - Alex L.</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 testimonial_column">
							<div className="card testimonial_card">
								<img
									className="testimonial_avatar"
									alt="smiling girl"
									src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
								></img>
								<div className="card-body">
									<p className="card-text">
										Picking out gifts is stressful for me and I always end up buying gift
										cards for my friends. Wishlist App relieves you of that stress and now
										I can finally get meaningful gifts that my friends actually want!
									</p>
									<p className="testimonial_author"> - Emily P.</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 testimonial_column">
							<div className="card testimonial_card">
								<img
									className="testimonial_avatar"
									alt="girl"
									src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
								></img>
								<div className="card-body">
									<p className="card-text">
										Wishlist App makes it super easy to find the perfect handmade gifts
										for friends & family. Not only are you supporting small businesses,
										but you can get gifts that people actually want!
									</p>
									<p className="testimonial_author"> - Sasha J.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="signup">
					<div className="row">
						<div className="col-md-6">
							<h1> Try it out for free today! </h1>
						</div>
						<div className="col-md-4">
							<div className="signup_form">
								<Flash />

								<Signup />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null, { deleteFlashMessage })(Homepage);
