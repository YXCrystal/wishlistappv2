const initialState = {
	listings: [],
	images: [],
	listing: null,
	loading: false,
	term: "",
};

const listingReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CLEAR":
			return initialState;
		case "GET_LOADING":
			return { ...state, loading: true };
		case "GET_TERM":
			return { ...state, term: action.payload };
		case "GET_LISTING":
			return { ...state, listing: action.payload, loading: false };
		case "GET_LISTINGS":
			return {
				...state,
				listings: [...state.listings, ...action.payload],
				loading: false,
			};
		case "GET_IMAGE":
			return {
				...state,
				listing: [Object.assign({}, ...state.listing, action.payload)],
			};
		case "GET_IMAGES":
			return {
				...state,
				images: [...state.images, action.payload],
				loading: false,
			};
		case "GET_INFO":
			return { ...state, listing: action.payload, loading: false };
		default:
			return state;
	}
};

export default listingReducer;
