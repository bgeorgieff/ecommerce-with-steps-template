import axios from "axios";
import {
  testimonialsUrl,
  createUserUrl,
  loginUserUrl,
  crossSalesListUrl,
} from "./url";

import fakeTestimonials from "../utils/fakeTestimonials";
import fakePartnerList from "../utils/fakePartnerList";
import { crossSaleOptions } from "../utils/fakeCrossSaleList";

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
