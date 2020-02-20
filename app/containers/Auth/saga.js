import { takeEvery, all, call, put, delay } from 'redux-saga/effects';
import axios from 'axios';

import { AUTH_USER, AUTH_REQUEST_LOGOUT } from './constants';
import {
  logoutSucceed,
  logout,
  authRequest,
  authSuccess,
  authError,
} from './actions';

// Individual exports for testing
// https://final-amberjs-task.herokuapp.com/api
const ROOT_URL = 'https://final-amberjs-task.herokuapp.com/api';

function* logoutSaga() {
  yield call([localStorage, 'removeItem'], 'token');
  yield put(logoutSucceed());
}

function* authUserSaga({ email, password }) {
  yield put(authRequest());
  try {
    const response = yield axios.post(`${ROOT_URL}/login`, { email, password });
    yield localStorage.setItem('token', response.data.details.result.token);

    yield put(authSuccess(response.data.details.result.token));
  } catch (error) {
    yield put(authError(error.response.data.details));
  }
}

export default function* authSaga() {
  // See example in containers/HomePage/saga.js
  yield all([
    takeEvery(AUTH_REQUEST_LOGOUT, logoutSaga),
    takeEvery(AUTH_USER, authUserSaga),
  ]);
}
