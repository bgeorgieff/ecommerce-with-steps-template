import { FETCH_OPTIONS } from "state/constants/actionTypes";
import * as api from "api";

export const getSmallFormOptions = () => async (dispatch) => {
  try {
    const smallFormOptions = await api.fetchSmallFormOptions();
    dispatch({
      type: FETCH_OPTIONS,
      data: smallFormOptions,
    });
  } catch (e) {
    console.log(e);
  }
};
