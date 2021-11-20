import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "./auth";
import bookingReducer from "./booking";
import autoAnimateReducer from "./autoAnimate";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    authReducer,
    bookingReducer,
    autoAnimateReducer,
  });

export default createRootReducer;
