const initialState = {
	loading: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_USER":
			return { ...state, ...action.payload };
		case "LOADING_WISHLIST":
			return { ...state, ...action.payload, loading: true };
		case "FETCH_WISHLIST":
			return { ...state, ...action.payload, loading: false };
		default:
			return state;
	}
};

export default userReducer;
