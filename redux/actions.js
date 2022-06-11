import axios from "axios";

import { BASE_URL } from "../config";

// Define action types
export const GET_BOOKS = "GET_BOOKS";
export const ADD_TO_BOOKMARK_LIST = "ADD_TO_BOOKMARK_LIST";
export const REMOVE_FROM_BOOKMARK_LIST = "REMOVE_FROM_BOOKMARK_LIST";

export const getBooks = () => {
  return async (dispatch) => {
    const response = await axios.get(`${BASE_URL}`);
    if (response.data) {
      dispatch({
        type: GET_BOOKS,
        payload: response.data,
      });
    } else {
      console.log("Unable to fetch data from the API BASE URL!");
    }
  };
};

export const addBookmark = (book) => (dispatch) => {
  dispatch({
    type: ADD_TO_BOOKMARK_LIST,
    payload: book,
  });
};

export const removeBookmark = (book) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_BOOKMARK_LIST,
    payload: book,
  });
};