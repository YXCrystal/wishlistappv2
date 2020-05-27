import { combineReducers } from "redux";
import listingReducer from "./listingReducer";
import userReducer from "./userReducer";

export default combineReducers({
	listings: listingReducer,
	user: userReducer,
});
