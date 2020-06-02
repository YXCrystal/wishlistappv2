import { combineReducers } from "redux";
import listingReducer from "./listingReducer";
import currentUserReducer from "./currentUserReducer";
import userReducer from "./userReducer";
import flashReducer from "./flashReducer";

export default combineReducers({
	listings: listingReducer,
	user: userReducer,
	currentUser: currentUserReducer,
	flash: flashReducer,
});
