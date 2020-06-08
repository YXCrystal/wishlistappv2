import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "../Loading";
import {
	getInfo,
	getLoading,
	getListingsAndImages,
	clear,
} from "../../actions/listingActions";
import { deleteFlashMessage } from "../../actions";
import "../../app.css";

class ShowProducts extends React.Component {
	state = { featured: "masks" };

	componentDidMount() {
		this.props.deleteFlashMessage();

		if (typeof this.props.match.params.search_term === "undefined") {
			this.props.clear();
			this.props.getListingsAndImages(this.state.featured);
		} else if (!this.props.loading && this.props.listings.length === 0) {
			this.props.clear();

			this.props.getListingsAndImages(
				this.props.match.params.search_term || this.state.featured
			);
		}
	}

	onImageClick = (listing_id, image) => {
		this.props.getInfo(listing_id, image);
		this.props.history.push(`/listing/${listing_id}`);
	};

	onLoadMore = () => {
		const offset = this.props.listings.length;
		this.props.getLoading();
		this.props.getListingsAndImages(
			this.props.match.params.search_term || this.state.featured,
			offset
		);
	};

	render() {
		const listings = this.props.images.map(({ listing_id, url_570xN }) => {
			return (
				<div key={listing_id} id={listing_id} className="col-md-4">
					<img
						onClick={() => this.onImageClick(listing_id, url_570xN)}
						className="listing_thumbnail"
						src={url_570xN}
						alt={url_570xN}
					/>
				</div>
			);
		});

		if (this.props.loading) {
			return (
				<div className="container listings">
					<Loading />
					<div className="row">{listings}</div>
				</div>
			);
		}

		if (!this.props.listings) {
			return <div> None </div>;
		}
		return (
			<div className="container listings">
				<h1 className="banner">
					{this.props.term ||
						this.props.match.params.search_term ||
						"Featured Items"}
				</h1>
				<div className="row">
					{listings}
					<button onClick={this.onLoadMore} className="btn_product">
						Load More
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		listings: state.listings.listings,
		images: state.listings.images,
		loading: state.listings.loading,
		term: state.listings.term,
	};
};
export default connect(mapStateToProps, {
	getInfo,
	getLoading,
	getListingsAndImages,
	clear,
	deleteFlashMessage,
})(withRouter(ShowProducts));
