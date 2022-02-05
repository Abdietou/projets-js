import axios from "axios";

export const GET_POST = "GET_POST";
export const ADD_POST = "ADD_POST";
export const PATCH_POST = "PATCH_POST";
export const DELETE_POST = "DELETE_POST";

const urlApi = "http://localhost:3000";
const getPostApiByOrder = "/posts?_sort=id&_order=desc";
const addPostApi = "/posts";

export const getPosts = () => {
  return (dispatch) => {
    return axios
      .get(urlApi + getPostApiByOrder)
      .then((response) => {
        dispatch({ type: GET_POST, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addPosts = (data) => {
  return (dispatch) => {
    return axios
      .post(urlApi + addPostApi, data)
      .then((response) => {
        dispatch({ type: ADD_POST, payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const patchPost = (data) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: urlApi + addPostApi + "/" + data.id,
      data: { ...data },
    })
      .then((response) => {
        dispatch({ type: PATCH_POST, payload: { ...data } });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: urlApi + addPostApi + "/" + id,
    })
      .then((response) => {
        dispatch({ type: DELETE_POST, payload: { id } });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
