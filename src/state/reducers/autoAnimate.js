import { AUTO_ANIMATE } from "../constants/actionTypes";

const autoAnimateReducer = (state = false, action) => {
  switch (action.type) {
    case AUTO_ANIMATE:
      return state = action.data;
    default:
      return state;
  }
};

export default autoAnimateReducer;
