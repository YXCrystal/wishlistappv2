import axios from "axios";

export const getCurrentUser = user => {
	return { type: "GET_USER", payload: user };
};

export const addToWishlist = listing => async dispatch => {
	const { title, image, price, currency_code, description, url } = listing[0];
	axios
		.post("/api/user/wishlist", {
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
