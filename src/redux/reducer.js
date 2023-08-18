import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAV:
      return {
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter((character) =>
          action.payload ? character.gender === action.payload : true
        ),
      };

    case ORDER:
      let orderCharacters = [...state.allCharacters];
      let orderFavs = [...state.myFavorites];

      //eslint-disable-next-line
      if (action.payload == "A") {
        orderCharacters = orderCharacters.sort((a, b) => a.id - b.id);
        orderFavs = orderFavs.sort((a, b) => a.id - b.id);
        //eslint-disable-next-line
      } else if (action.payload == "D") {
        orderCharacters = orderCharacters.sort((a, b) => b.id - a.id);
        orderFavs = orderFavs.sort((a, b) => b.id - a.id);
      }

      return {
        ...state,
        myFavorites: orderFavs,
        allCharacters: orderCharacters,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
