export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const addFavs = (id) => {
  return {
    type: ADD_FAV,
    payload: id,
  };
};

export const removeFavs = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};
