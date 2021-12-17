import axios from "axios";
import { CREATE_USER_URL, LOGIN_USER_URL } from "constants/constants";
import fakeTestimonials from "utils/fakeTestimonials";
import fakePartnerList from "utils/fakePartnerList";
import { fakeSmallFormOptions } from "utils/fakeSmallFormOptions";
import { crossSaleOptions } from "utils/fakeCrossSaleList";

export const fetchSmallFormOptions = () => {
  return fakeSmallFormOptions;
  // axios.get(smallFormOptionsUrl)
};

export const fetchTestimonials = () => {
  return fakeTestimonials;
  // axios.get(testimonialsUrl)
};

export const fetchPartners = () => {
  return fakePartnerList;
  // axios.get(partnersUrl)
};

export const fetchCrossSales = () => {
  return crossSaleOptions;
  // axios.get(crossSalesListUrl)
};

export const createUser = ({ username, email, password }) => {
  const user = axios.post(CREATE_USER_URL, { username, email, password });
  return user;
};

export const loginUser = (username, email, password) => {
  const user = axios.get(LOGIN_USER_URL, { username, email, password });
  return user;
};

export const postOrder = () => {};
