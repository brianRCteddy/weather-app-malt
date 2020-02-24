import { takeEvery, all, call, put, select } from 'redux-saga/effects';
import axios from 'axios';

import {
  AUTH_USER,
  AUTH_REQUEST_LOGOUT,
  GET_USER_DETAILS_REQUEST,
  SIGN_UP,
} from './constants';
import {
  logoutSucceed,
  authRequest,
  authSuccess,
  authError,
  getUserDetailsSuccess,
  getUserDetailsError,
  getUserDetailsRequest,
  signUpRequest,
  signUpError,
  signUpSuccess,
} from './actions';
import request from '../../utils/request';
import { makeSelectUserId } from './selectors';

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

    const { token, userId } = response.data.details.result;

    yield localStorage.setItem('token', token);
    yield put(authSuccess(token, userId));
    // yield put(getUserDetailsRequest());
  } catch (error) {
    yield put(authError(error.response.data.details));
  }
}

function* signUpSaga({
  email,
  password,
  firstName,
  middleName,
  lastName,
  role,
}) {
  yield put(signUpRequest());

  try {
    const response = yield axios.post(`${ROOT_URL}/add`, {
      email,
      password,
      firstName,
      middleName,
      lastName,
      role,
    });
    yield put(signUpSuccess(response.data.details.message));
  } catch (error) {
    yield put(signUpError(error.response.data.details.message));
  }
}

// function* getUserDetailsSaga() {
//   const userID = yield select(makeSelectUserId());
//   const url = `${ROOT_URL}/user?id=${userID}`;

//   try {
//     const data = yield axios.get(url);
//     yield put(getUserDetailsSuccess(data.details.result));
//   } catch (error) {
//     yield put(getUserDetailsError(error));
//   }
// }

export default function* authSaga() {
  // See example in containers/HomePage/saga.js
  yield all([
    takeEvery(AUTH_REQUEST_LOGOUT, logoutSaga),
    takeEvery(AUTH_USER, authUserSaga),
    takeEvery(SIGN_UP, signUpSaga),
    // takeEvery(GET_USER_DETAILS_REQUEST, getUserDetailsSaga),
  ]);
}
