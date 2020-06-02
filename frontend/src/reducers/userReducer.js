const initialState = {
	user: null,
	wishlist: [],
	listingExists: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_USER":
			return { ...state, user: action.payload };
		case "ADD_WISHLIST":
			return {
				...state,
				wishlist: [...state.wishlist, action.payload],
				listingExists: true,
			};
		case "FETCH_WISHLIST":
			return { ...state, wishlist: action.payload, listingExists: false };
		case "SEARCH_WISHLIST":
			return { ...state, listingExists: action.payload };
		case "DELETE_WISHLIST":
			const newWishlist = state.wishlist.filter(
				listing => listing._id !== action.payload._id
			);
			return { ...state, wishlist: newWishlist, listingExists: false };
		default:
			return state;
	}
};

export default userReducer;
