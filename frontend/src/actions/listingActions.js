import etsy from "../apis/etsy.js";

// --- Fetch listings ---
export const getListing = listing_id => async dispatch => {
	const response = await etsy.get(`/${listing_id}`, {
		params: {
			api_key: process.env.REACT_APP_API_KEY,
		},
	});

	dispatch({
		type: "GET_LISTING",
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

// --- Fetch Images ---
export const getImages = (listing_id, type) => dispatch => {
	etsy
		.get(`/${listing_id}/images`, {
			params: {
				api_key: process.env.REACT_APP_API_KEY,
			},
		})
		.then(res =>
			dispatch({
				type: type,
				payload: res.data.results.map(({ listing_id, url_570xN }) => ({
					listing_id,
					url_570xN,
				}))[0],
			})
		);
};

// --- Fetch listings & images ---
export const getListingsAndImages = (term, offset = 0) => async (
	dispatch,
	getState
) => {
	await dispatch(getListings(term, offset));

	const listings = getState().listings.listings;
	const offsetListings = listings.slice(offset, listings.length);

	offsetListings.forEach(listing => {
		dispatch(getImages(listing.listing_id, "GET_IMAGES"));
	});
};

export const getListingAndImage = listing_id => async dispatch => {
	await dispatch(getListing(listing_id));

	await dispatch(getImages(listing_id, "GET_IMAGE"));
};

export const getInfo = (listing_id, url_570xN) => (dispatch, getState) => {
	var listing = getState().listings.listings.filter(
		el => el.listing_id === listing_id
	);

	var combined = Object.assign({}, ...listing, { url_570xN });

	dispatch({ type: "GET_INFO", payload: [combined] });
};

// ------
export const getLoading = () => {
	return { type: "GET_LOADING" };
};

export const getTerm = term => {
	return { type: "GET_TERM", payload: term };
};

export const clear = () => {
	return { type: "CLEAR" };
};
