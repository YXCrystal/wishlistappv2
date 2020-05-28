export const getFlashMessage = message => {
	return { type: "GET_FLASH_MESSAGE", payload: message };
};

export const deleteFlashMessage = () => {
	return { type: "DELETE_FLASH_MESSAGE" };
};
