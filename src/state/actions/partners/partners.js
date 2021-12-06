import * as api from "../../../api";
import { FETCH_PARTNERS } from "../../constants/actionTypes";

export const getPartnerList = () => async (dispatch) => {
  try {
    const partners = await api.fetchPartners();
    dispatch({
      type: FETCH_PARTNERS,
      data: partners,
    });
  } catch (e) {
    console.log(e);
  }
};
