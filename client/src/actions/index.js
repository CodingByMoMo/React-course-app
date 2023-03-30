import axios from "axios";
import { FETCH_USER } from "./types.js";

/**
 * @author CodingByMoMo
 * @description Action to fetch user from server.
 * @returns function.
 */
export const fetch_user = () => async dispatch => {
    const request = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: request.data });
  };
