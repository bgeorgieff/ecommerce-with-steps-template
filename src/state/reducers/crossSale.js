import { ADD_CROSSSALE } from "../constants/actionTypes";

const initialState = sessionStorage.getItem("crossSales") || [];

const crossSaleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CROSSSALE:
      sessionStorage.setItem("crossSales", action?.data.crossSales);
      return [...state, action?.data.crossSales];
    default:
      return state;
  }
};

export default crossSaleReducer;
