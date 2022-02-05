import { ADD_USER_LIKES, GET_USER } from "../actions/user.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
  if (action.type === GET_USER) {
    return action.payload;
  } else if (action.type === ADD_USER_LIKES) {
    return state.map((user) => {
      if (user.id === action.payload.id) {
        return {
          ...user,
          likes: action.payload.likes,
        };
      } else return user;
    });
  } else {
    return state;
  }
}
