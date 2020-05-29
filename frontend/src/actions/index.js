export const getFlashMessage = messages => {
	return { type: "GET_FLASH_MESSAGE", payload: messages };
};

export const deleteFlashMessage = () => {
	return { type: "DELETE_FLASH_MESSAGE" };
};
