import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      const { myFavorites } = state;
      const newFavorites = [...myFavorites, action.payload];
      return { ...state, myFavorites: newFavorites };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== parseInt(action.payload)
        ),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
