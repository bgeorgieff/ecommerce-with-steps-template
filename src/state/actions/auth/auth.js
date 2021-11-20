import { AUTH } from "../constants/actionTypes";
import { push } from "connected-react-router";

export const signIn = (formdata, history) => async (dispatch) => {
  try {
    //log in user

    dispatch(push("/"));
  } catch (e) {
    console.log(e);
  }
};

export const signUp = (formdata, history) => async (dispatch) => {
  try {
    //sign up user

    dispatch(push("/"));
  } catch (e) {
    console.log(e);
  }
};
