import { LOGOUT, LOGIN } from "./userType";
export const loginUser = () => {
  return {
    type: LOGIN,
  };
};
export const logOutUser = () => {
  return {
    type: LOGOUT,
  };
};
