import axios from "axios";
import { FETCH_USER,FETCH_SURVEYS } from "./types.js";

/**
 * @author CodingByMoMo
 * @description Action to fetch user from server.
 * @returns {Object} User Model.
 */
export const fetch_user = () => async (dispatch) => {
  const request = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: request.data });
};

/**
 * @description Action to fetch user after payment was requested.
 * @param {*} token Stripe Token.
 * @returns {Object} User model.
 */
export const handle_token = (token) => async (dispatch) => {
  const response = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const response = await axios.post("/api/surveys", values);

  history.push('/surveys');
  dispatch({type: FETCH_USER, payload: response.data});
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type:FETCH_SURVEYS, payload:res.data})
} 
