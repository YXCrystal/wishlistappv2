const initialState = {
	user: null,
	wishlist: [],
	listingExists: false,
};

const currentUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_CURRENT_USER":
			return { ...state, user: action.payload };
		case "SIGN_OUT":
			return initialState;
		case "ADD_WISHLIST":
			return {
				...state,
				wishlist: [...state.wishlist, action.payload],
				listingExists: true,
			};
		case "FETCH_CURRENT_WISHLIST":
			return {
				...state,
				wishlist: action.payload.wishlist,
				listingExists: false,
			};
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

export default currentUserReducer;
