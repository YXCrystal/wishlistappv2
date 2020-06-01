import axios from "axios";

export const getCurrentUser = user => {
	return { type: "GET_USER", payload: user };
};

export const addToWishlist = (listing, currentUser) => async dispatch => {
	const {
		title,
		listing_id,
		image,
		price,
		currency_code,
		description,
		url,
	} = listing[0];
	const { _id } = currentUser.data;

	axios
		.post(`/api/user/wishlist/${_id}`, {
			title,
			listing_id,
			image,
			price,
			currency_code,
			description,
			url,
		})
		.then(res => {
			dispatch({ type: "ADD_WISHLIST", payload: res.data });
		});
};

export const fetchWishlist = currentUser => async dispatch => {
	const { _id } = currentUser.data;
	const response = await axios.get(`/api/user/wishlist/${_id}`);

	dispatch({ type: "FETCH_WISHLIST", payload: response.data });
};

export const searchWishlist = (currentUser, listing) => async (
	dispatch,
	getState
) => {
	await dispatch(fetchWishlist(currentUser));

	const wishlist = getState().user.wishlist;

	wishlist.forEach(({ listing_id }) => {
		if (listing_id == listing[0].listing_id) {
			return dispatch({ type: "SEARCH_WISHLIST", payload: true });
		}
	});
};
