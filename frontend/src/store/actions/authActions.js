import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};


export const setuserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

export const login =(userDetails,Navigate)=> async (Dispatch) => {
    const response = await api.login(userDetails);
    if (response.error) {
      Dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      Dispatch(setuserDetails(userDetails));
      Navigate("/dashboard")
    }

};

export const register =(userDetails,Navigate)=> async (Dispatch) => {
    const response = await api.register(userDetails);
    if (response.error) {
      Dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      Dispatch( setuserDetails(userDetails));
      Navigate("/dashboard")
    }
};
