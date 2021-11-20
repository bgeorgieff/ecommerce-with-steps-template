import {
  AUTO_ANIMATE,
} from "../../constants/actionTypes";

export const autoAnimate = (bool) => {
  return (dispatch) => {
    dispatch({
      type: AUTO_ANIMATE,
      data: bool,
    });
  };
};
