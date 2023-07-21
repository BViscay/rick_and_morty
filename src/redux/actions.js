export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

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
