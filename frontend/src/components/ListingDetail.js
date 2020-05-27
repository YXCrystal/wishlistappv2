import React from "react";
import "../app.css";
import { connect } from "react-redux";
import { addToWishlist } from "../actions/userActions.js";

class ListingDetail extends React.Component {
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
										onClick={() => {
											this.props.addToWishlist(this.props.listing);
										}}
										href="#"
										className="listing_btn listing_btn--wishlist"
									>
										Add to Wishlist <i className="icon far fa-heart"></i>
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
	return { listing: state.listings.listing };
};
export default connect(mapStateToProps, { addToWishlist })(ListingDetail);
