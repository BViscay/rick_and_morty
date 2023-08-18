import axios from "axios";
import { API_URL_FAV } from "../Config/api";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFavs = (id) => {
  const endpoint = API_URL_FAV;
  return (dispatch) => {
    axios.post(endpoint, id).then(({ data }) => {
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    });
  };
};

export const removeFavs = (id) => {
  const endpoint = API_URL_FAV + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    });
  };
};

export const filter = (gender) => {
  const payload = gender === "All genders" ? null : gender;
  return {
    type: "FILTER",
    payload,
  };
};

export const order = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
