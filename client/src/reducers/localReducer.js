import { AUTH_FAILURE } from "../actions/types.js";

/**
 * @export
 * @param {*} [state=null]
 * @param {*} action
 * @return {*} state
 */
export default function (state = null, action) {
  switch (action.type) {
    case AUTH_FAILURE:
      return action.payload || null;
    default:
      return state;
  }
}
