import axios from "axios";

export const getCurrentUser = user => {
	return { type: "GET_USER", payload: user };
};

export const addToWishlist = (listing, currentUser) => async dispatch => {
	const { title, image, price, currency_code, description, url } = listing[0];
	const { _id } = currentUser.data;
	console.log(_id);
	axios
		.post(`/api/user/wishlist/${_id}`, {
			title,
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
