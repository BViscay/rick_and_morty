import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.myFavorites, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        allCharacters: state.myFavorites.filter(
          //eslint-disable-next-line
          (character) => character.id != action.payload
        ),
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

// const reducer = (state = initialState, {type, payload}) => {
//     switch(type){
//         case ADD_FAV:
//             return {
//                 ...state,
//                 favs: [...state.favs, payload],
//                 allCharacters: [...state.favs, payload]
//             }

//         case REMOVE_FAV:
//             return {
//                 ...state,
//                 allCharacters: state.favs.filter(character => character.id != payload)
//             }

//         case FILTER:
//             return {
//                 ...state,
//                 favs: state.allCharacters.filter(character => character.gender == payload)
//             }

//         case ORDER:
//             let orderCharacters = [...state.allCharacters]
//             let orderFavs = [...state.favs]

//             // [4, 5, 2, 6]
//             if(payload == "A") {
//                 orderCharacters = orderCharacters.sort((a, b) => a.id - b.id)
//                 orderFavs = orderFavs.sort((a, b) => a.id - b.id)
//             } else if(payload == "D") {
//                 orderCharacters = orderCharacters.sort((a, b) => b.id - a.id)
//                 orderFavs = orderFavs.sort((a, b) => b.id - a.id)
//             }

//             return {
//                 ...state,
//                 favs: orderFavs,
//                 allCharacters: orderCharacters
//             }

//         case FILTERANDORDER:
//             let orderAndFilterFavs = [...state.allCharacters]

//             if(payload.filter !== "") {
//                 orderAndFilterFavs =  orderAndFilterFavs.filter(character => character.gender == payload.filter)
//             }

//             if(payload.order == "A") {
//                 orderAndFilterFavs = orderAndFilterFavs.sort((a, b) => a.id - b.id)
//             } else if(payload.order == "D") {
//                 orderAndFilterFavs = orderAndFilterFavs.sort((a, b) => b.id - a.id)
//             }

//             return {
//                 ...state,
//                 favs: orderAndFilterFavs
//             }

//         default:
//             return {...state}
//     }
// }

// export default reducer
