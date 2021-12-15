import * as api from "api";
import { FETCH_TESTIMONIALS } from "../../constants/actionTypes";

export const getTestimonials = () => async (dispatch) => {
  try {
    const testimonials = await api.fetchTestimonials();
    dispatch({
      type: FETCH_TESTIMONIALS,
      data: testimonials,
    });
  } catch (e) {
    console.log(e);
  }
};
