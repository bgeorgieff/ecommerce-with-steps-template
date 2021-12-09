import axios from "axios";
import {
  testimonialsUrl,
  createUserUrl,
  loginUserUrl,
  crossSalesListUrl,
  smallFormOptionsUrl,
} from "./url";

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
  const user = axios.post(createUserUrl, { username, email, password });
  return user;
};

export const loginUser = (username, email, password) => {
  const user = axios.get(loginUserUrl, { username, email, password });
  return user;
};

export const postOrder = () => {};
