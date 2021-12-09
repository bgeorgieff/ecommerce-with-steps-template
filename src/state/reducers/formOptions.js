import { FETCH_OPTIONS } from "state/constants/actionTypes";
const formOptionsReducer = (state = false, action) => {
  switch (action.type) {
    case FETCH_OPTIONS:
      return action.data;
    default:
      return state;
  }
};

export default formOptionsReducer;
