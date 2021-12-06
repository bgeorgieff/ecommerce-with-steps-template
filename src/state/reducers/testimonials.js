import { FETCH_TESTIMONIALS } from "../constants/actionTypes";

const testimonialReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TESTIMONIALS:
      return action.data;
    default:
      return state;
  }
};

export default testimonialReducer;
