const initialState = {
	user: null,
	wishlist: [],
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_USER":
			return { ...state, user: action.payload };
		case "ADD_WISHLIST":
			return { ...state, wishlist: [...state.wishlist, action.payload] };
		default:
			return state;
	}
};

export default userReducer;
