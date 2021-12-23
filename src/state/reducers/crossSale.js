import {
  ADD_CROSSSALE,
  NEW_CROSS_SALE_ARR,
  REMOVE_CROSSSALE,
} from "../constants/actionTypes";

const initialState = JSON.parse(sessionStorage.getItem("id")) || [];

const crossSaleReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CROSS_SALE_ARR:
      return [];
    case ADD_CROSSSALE:
      sessionStorage.setItem(
        "id",
        JSON.stringify([...state, { id: action.data }])
      );
      return [...state, { id: action?.data }];
    case REMOVE_CROSSSALE:
      const newArr = state.filter((e) => e.id !== action.data).filter((e) => e);
      sessionStorage.setItem("id", JSON.stringify([...newArr]));
      return [...newArr];
    default:
      return state;
  }
};

export default crossSaleReducer;
