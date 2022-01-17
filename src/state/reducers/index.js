import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "./auth";
import bookingReducer from "./booking";
import crossSaleReducer from "./crossSale";
import testimonialReducer from "./testimonials";
import partnerListReducer from "./partners";
import formOptionsReducer from "./formOptions";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    authReducer,
    bookingReducer,
    crossSaleReducer,
    testimonialReducer,
    partnerListReducer,
    formOptionsReducer,
  });

export default createRootReducer;
