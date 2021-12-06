import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "./auth";
import bookingReducer from "./booking";
import autoAnimateReducer from "./autoAnimate";
import crossSaleReducer from "./crossSale";
import testimonialReducer from "./testimonials";
import partnerListReducer from "./partners";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    authReducer,
    bookingReducer,
    autoAnimateReducer,
    crossSaleReducer,
    testimonialReducer,
    partnerListReducer,
  });

export default createRootReducer;
