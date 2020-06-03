import axios from "axios";

// --- User ---

export const getCurrentUser = user => {
	const { _id, username } = user.data;
	return { type: "GET_CURRENT_USER", payload: { _id, username } };
};

// --- Wishlist ---
export const addToWishlist = (currentUser, listing) => async dispatch => {
	const {
		title,
		listing_id,
		url_570xN,
		price,
		currency_code,
		description,
		url,
	} = listing[0];

	console.log(currentUser._id);
	const { _id } = currentUser;

	axios
		.post(`/api/user/wishlist/${_id}`, {
			title,
			listing_id,
			image: url_570xN,
			price,
			currency_code,
			description,
			url,
		})
		.then(res => {
			dispatch({ type: "ADD_WISHLIST", payload: res.data });
		});
};

export const fetchWishlist = (currentUser, type) => async dispatch => {
	const response = await axios.get(`/api/user/wishlist/${currentUser}`);

	dispatch({ type, payload: response.data });
};

export const searchWishlist = (currentUser, listing) => async (
	dispatch,
	getState
) => {
	const { username } = currentUser;
	await dispatch(fetchWishlist(username, "FETCH_CURRENT_WISHLIST"));

	const wishlist = getState().user.wishlist;

	wishlist.forEach(({ listing_id }) => {
		if (listing_id === listing[0].listing_id.toString()) {
			return dispatch({ type: "SEARCH_WISHLIST", payload: true });
		}
	});
};

export const removeWishlist = (currentUser, listing) => async dispatch => {
	const { _id } = currentUser;
	const listing_id = listing[0].listing_id.toString();
	const response = await axios.delete(
		`/api/user/wishlist/${_id}/listing/${listing_id}`
	);

	dispatch({ type: "DELETE_WISHLIST", payload: response.data });
};
