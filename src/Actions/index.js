import axios from "axios";

// export const GET_DOG = 'GET_DOG';
export const GET_DOG_SUCCESS = 'GET_DOG_SUCCES';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';


export const getDog = () => dispatch => {
  dispatch(setIsFetching(true));
  axios.get('https://dog.ceo/api/breeds/image/random')
  .then((res) => {
    const message = res.data.message;
  dispatch(getDogSuccess(message));
  }, (error) => {

  })
  // return {type: GET_DOG, payload: {data: 'hello'}}
}

const setIsFetching = (isFetching) => {
  return {type: SET_IS_FETCHING, payload: isFetching }
}

const getDogSuccess = (data) => {
  return {type: GET_DOG_SUCCESS, payload: data}
}

