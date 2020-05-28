import { combineReducers } from "redux";
import listingReducer from "./listingReducer";
import userReducer from "./userReducer";
import flashReducer from "./flashReducer";

export default combineReducers({
	listings: listingReducer,
	user: userReducer,
	flash: flashReducer,
});
