import { takeEvery, put } from "redux-saga/effects";
import * as actionTypes from "../types";
import * as actions from "../actions";

const user = {
  name: "Bahadır SAYGILI",
  email: "admin@admin.com",
  password: "123456",
};

export function* loginRequestSaga({ payload }) {
  try {
    if (user.email === payload.email && user.password === payload.password) {
      yield put(actions.loginRequestSuccess(user));
    } else {
      yield put(actions.loginRequestFail("Please check your information"));
    }
  } catch (error) {
    yield put(actions.loginRequestFail(error));
  }
}

export function* watchHome() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, loginRequestSaga);
}
