import { GET_POST } from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  if (action.type === GET_POST) {
    return action.payload;
  } else {
    return state;
  }
}
