import { GET_DOG_SUCCESS, SET_IS_FETCHING } from "../actions";

const initialState = {
    message: "https://images.dog.ceo/breeds/clumber/n02101556_3122.jpg",
    status: "succes",
    isFetching: false,
    error: ''
  };
  console.log("Initial:", initialState);
  export const reducer = (state = initialState, action) => {
    switch (action.type) {

      case SET_IS_FETCHING:
        console.log(action);
        return {...state, isFetching: action.payload}

      case GET_DOG_SUCCESS:
        console.log(action);
        return {...state, isFetching: false, message: action.payload}
      
      default:
        return state;
    }
  };