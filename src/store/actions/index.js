import * as actionTypes from "../types";

export const loginRequest = (data) => {
  return {
    type: actionTypes.LOGIN_REQUEST,
    payload: data,
  };
};
export const loginRequestSuccess = (data) => {
  return {
    type: actionTypes.LOGIN_REQUEST_SUCCESS,
    payload: data,
  };
};
export const loginRequestFail = (error) => {
  return {
    type: actionTypes.LOGIN_REQUEST_FAIL,
    payload: error,
  };
};

export const clearError = () => {
  return {
    type: actionTypes.CLEAR_ERROR,
  };
};
