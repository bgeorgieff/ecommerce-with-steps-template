import { FETCH_PARTNERS } from "../constants/actionTypes";

const partnerListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PARTNERS:
      return action.data;
    default:
      return state;
  }
};

export default partnerListReducer;
