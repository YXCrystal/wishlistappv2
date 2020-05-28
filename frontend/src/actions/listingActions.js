import etsy from "../apis/etsy.js";

export const getListings = (term, offset) => async dispatch => {
	const response = await etsy.get("/active?", {
		params: {
			keywords: term,
			api_key: process.env.REACT_APP_API_KEY,
			limit: 1,
			offset: offset,
			sort_on: "score",
		},
	});

	dispatch({
		type: "GET_LISTINGS",
		payload: response.data.results.map(
			({ listing_id, price, currency_code, title, description, url }) => ({
				listing_id,
				price,
				currency_code,
				title,
				description,
				url,
			})
		),
	});
};

export const getImages = listing_id => dispatch => {
	etsy
		.get(`/${listing_id}/images`, {
			params: {
				api_key: process.env.REACT_APP_API_KEY,
			},
		})
		.then(res =>
			dispatch({
				type: "GET_IMAGES",
				payload: res.data.results.map(({ listing_id, url_570xN }) => ({
					listing_id,
					url_570xN,
				}))[0],
			})
		);
};

export const getListingsAndImages = (term, offset = 0) => async (
	dispatch,
	getState
) => {
	await dispatch(getListings(term, offset));

	const listings = getState().listings.listings;
	const offsetListings = listings.slice(offset, listings.length);

	offsetListings.forEach(listing => {
		dispatch(getImages(listing.listing_id));
	});
};

export const getInfo = (listing_id, image) => (dispatch, getState) => {
	var listing = getState().listings.listings.filter(
		el => el.listing_id === listing_id
	);

	var combined = Object.assign({}, ...listing, { image });

	dispatch({ type: "GET_INFO", payload: [combined] });
};

export const getLoading = () => {
	return { type: "GET_LOADING" };
};

export const getTerm = term => {
	return { type: "GET_TERM", payload: term };
};

export const clear = () => {
	return { type: "CLEAR" };
};
