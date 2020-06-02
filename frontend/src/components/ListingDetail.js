import React from "react";
import "../app.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
	addToWishlist,
	fetchWishlist,
	searchWishlist,
	removeWishlist,
} from "../actions/userActions.js";
import { deleteFlashMessage } from "../actions";

class ListingDetail extends React.Component {
	componentDidMount() {
		this.props.deleteFlashMessage();
		if (this.props.user) {
			this.props.searchWishlist(this.props.user, this.props.listing);
		}
	}

	addToWishlist = () => {
		if (!this.props.user) {
			this.props.history.push("/login");
		} else if (!this.props.listingExists) {
			this.props.addToWishlist(this.props.user, this.props.listing);
		} else {
			this.props.removeWishlist(this.props.user, this.props.listing);
		}
	};

	renderListing() {
		if (!this.props.listing) {
			return (
				<div className="error_listing">An error has occured, please try again</div>
			);
		} else {
			return this.props.listing.map(
				({ listing_id, title, image, price, currency_code, description, url }) => {
					return (
						<div key={listing_id} className="container listing">
							<h1 className="listing_title"> {title} </h1>
							<div className="row listing_content">
								<div className="col-md-6">
									<img className="listing_image" src={image} alt={title} />
									<p className="listing_price">
										Price: {price} {currency_code}
									</p>
									<a
										onClick={this.addToWishlist}
										href="#"
										className="listing_btn listing_btn--wishlist"
									>
										Add to Wishlist
										<i
											className={
												this.props.listingExists ? "icon fas fa-heart" : "icon far fa-heart"
											}
										></i>
									</a>
									<a
										href={url}
										target="_blank"
										className="listing_btn listing_btn--shop"
									>
										Shop Now <i className="icon fas fa-shopping-cart"></i>
									</a>
								</div>

								<p className="col-md-6 listing_description"> {description} </p>
							</div>
						</div>
					);
				}
			);
		}
	}

	render() {
		return <div>{this.renderListing()}</div>;
	}
}

const mapStateToProps = state => {
	return {
		listing: state.listings.listing,
		user: state.user.user,
		wishlist: state.user.wishlist,
		listingExists: state.user.listingExists,
	};
};
export default connect(mapStateToProps, {
	addToWishlist,
	deleteFlashMessage,
	fetchWishlist,
	searchWishlist,
	removeWishlist,
})(withRouter(ListingDetail));
