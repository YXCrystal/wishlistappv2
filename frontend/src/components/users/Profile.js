import React from "react";
import { connect } from "react-redux";
import { fetchWishlist, loadingWishlist } from "../../actions/userActions.js";
import { getInfo, clear } from "../../actions/listingActions.js";
import Loading from "../Loading.js";

class Profile extends React.Component {
	componentDidMount() {
		this.props.loadingWishlist();
		this.props.fetchWishlist(this.props.match.params.username, "FETCH_WISHLIST");
	}

	onImageClick = listing_id => {
		this.props.clear();
		this.props.history.push(`/listing/${listing_id}`);
	};

	renderWishlist() {
		return this.props.wishlist.map(({ listing_id, image }) => {
			return (
				<div key={listing_id} id={listing_id} className="col-md-3">
					<img
						onClick={() => this.onImageClick(listing_id, image)}
						className="profile_listing"
						src={image}
						alt={image}
					/>
				</div>
			);
		});
	}

	render() {
		const { username } = this.props.user;

		if (this.props.loading) {
			return <Loading />;
		} else if (!this.props.wishlist) {
			return <div className="error"> Error: User does not exist </div>;
		} else {
			return (
				<div className="container">
					<h1 className="banner"> {username}'s Wishlist </h1>
					<div className="row">{this.renderWishlist()}</div>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
		wishlist: state.user.wishlist,
		loading: state.user.loading,
	};
};
export default connect(mapStateToProps, {
	getInfo,
	fetchWishlist,
	loadingWishlist,
	clear,
})(Profile);
