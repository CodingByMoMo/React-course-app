import axios from "axios";
import { FETCH_USER } from "./types.js";

export const fetch_user = () => async dispatch => {
    const request = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: request.data });
  };
