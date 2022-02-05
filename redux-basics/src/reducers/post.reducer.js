import {
  ADD_POST,
  DELETE_POST,
  GET_POST,
  PATCH_POST,
} from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action?.type) {
    case GET_POST:
      return action?.payload;
    case ADD_POST:
      return [action?.payload, ...state];
    case PATCH_POST:
      return state.map((post) => {
        if (post.id === action?.payload.id) {
          return {
            ...post,
            content: action?.payload.content,
          };
        } else return post;
      });
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload.id);
    default:
      return state;
  }
}
