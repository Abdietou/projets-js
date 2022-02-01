import axios from "axios";

export const GET_USER = "GET_USER";

const urlApi = "http://localhost:3000";
const getApiUsers = "/users";

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
