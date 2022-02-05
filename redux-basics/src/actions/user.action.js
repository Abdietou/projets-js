import axios from "axios";

export const GET_USER = "GET_USER";
export const ADD_USER_LIKES = "ADD_USER_LIKES";

const urlApi = "http://localhost:3000";
const getApiUsers = "/users";
const posts = "/posts";

export const getUsers = () => {
  return (dispatch) => {
    return axios
      .get(urlApi + getApiUsers)
      .then((response) => {
        dispatch({ type: GET_USER, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addUserLikes = (data) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: urlApi + posts + "/" + data.id,
      data: { ...data },
    })
      .then((response) => {
        dispatch({ type: ADD_USER_LIKES, payload: { ...data } });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
