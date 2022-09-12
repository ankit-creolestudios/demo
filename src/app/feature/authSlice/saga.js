import { call, delay, put, race, take, takeLatest } from "redux-saga/effects";

import api from "../../api";
import { actions } from "./index";
const LOGIN_TIMEOUT_SEC = 5;

export const userSagas = [
  takeLatest(actions.login.type, userLoginSaga),
  takeLatest(actions.signUp.type, userRegisterSaga),
  takeLatest(actions.signOut.type, userSignout),
];

function* userLoginSaga({ payload }) {
  console.log(payload);
  try {
    const res = yield call(api.user.login, payload);
    yield put(actions.loginSuccess(res));
  } catch (e) {
    console.log("Exception in userLoginSaga");
  }
}

function* userRegisterSaga({ payload }) {
  console.log(payload);
  try {
    const res = yield call(api.user.signUp, payload);
    yield put(actions.loginSuccess(res));
  } catch (e) {
    console.log("Exception in user register");
  }
}
function* userSignout({ payload }) {
  console.log(payload);
  try {
    const res = yield call(api.user.login, payload);
    yield put(actions.loginSuccess(res));
  } catch (e) {
    console.log("Exception in userLoginSaga");
  }
}
