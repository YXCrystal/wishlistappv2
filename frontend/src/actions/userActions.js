import axios from "axios";

export const getCurrentUser = user => {
	return { type: "GET_USER", payload: user };
};

export const addToWishlist = listing => async dispatch => {
	console.log(listing);
	const { title, image, price, currency_code, description, url } = listing;
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
			dispatch({ type: "ADD_WISHLIST", payload: res });
		});
};
