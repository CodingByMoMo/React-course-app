import { combineReducers } from "redux";
import auth_reducer from "./authReducer.js";

//  Function which combines multiple reducers.
export default combineReducers({
    auth: auth_reducer,
});