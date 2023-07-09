import { combineReducers } from "redux";
import { reducer as from_reducer } from "redux-form";
import auth_reducer from "./authReducer.js";
import surveysReducer from "./surveysReducer.js";
import localReducer from "./localReducer.js";

//  Function which combines multiple reducers.
export default combineReducers({
    auth: auth_reducer,
    form: from_reducer,
    error: localReducer,
    surveys: surveysReducer,
});