const initialState = {
	type: null,
	message: "",
};

const flashReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_FLASH_MESSAGE":
			return {
				...state,
				type: action.payload.type,
				message: action.payload.message,
			};
		case "DELETE_FLASH_MESSAGE":
			return { ...state, type: null, message: "" };
		default:
			return state;
	}
};

export default flashReducer;
