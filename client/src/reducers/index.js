import { combineReducers } from "redux";
import auth_reducer from "./authReducer.js";

export default combineReducers({
    auth: auth_reducer,
});