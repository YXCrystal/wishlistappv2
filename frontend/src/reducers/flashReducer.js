const flashReducer = (state = null, action) => {
	switch (action.type) {
		case "GET_FLASH_MESSAGE":
			return {
				...state,
				type: action.payload.type,
				messages: action.payload.messages,
			};
		case "DELETE_FLASH_MESSAGE":
			return null;
		default:
			return state;
	}
};

export default flashReducer;
