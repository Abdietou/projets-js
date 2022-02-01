import axios from "axios";

export const GET_POST = "GET_POST";

const urlApi = "http://localhost:3000";
const postApiByOrder = "/posts?_sort=id&_order=desc";

export const getPosts = () => {
  return (dispatch) => {
    return axios
      .get(urlApi + postApiByOrder)
      .then((response) => {
        dispatch({ type: GET_POST, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
