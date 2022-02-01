import { GET_USER } from "../actions/user.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
  if (action.type === GET_USER) {
    return action.payload;
  } else {
    return state;
  }
}
