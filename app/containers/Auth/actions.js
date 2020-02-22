/*
 *
 * Auth actions
 *
 */

import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_REQUEST_LOGOUT,
  AUTH_LOGOUT,
  AUTH_USER,
  SIGN_UP_REQUEST,
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_ERROR,
} from './constants';

export function authUser(email, password) {
  return {
    type: AUTH_USER,
    email,
    password,
  };
}

export function authRequest() {
  return {
    type: AUTH_REQUEST,
  };
}

export function authSuccess(token, userId) {
  return {
    type: AUTH_SUCCESS,
    token,
    userId,
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    error,
  };
}

export function logout() {
  return {
    type: AUTH_REQUEST_LOGOUT,
  };
}

export function logoutSucceed() {
  return {
    type: AUTH_LOGOUT,
  };
}

export function getUserDetailsRequest() {
  return {
    type: GET_USER_DETAILS_REQUEST,
  };
}

export function getUserDetailsSuccess(data) {
  return {
    type: GET_USER_DETAILS_SUCCESS,
    data,
  };
}

export function getUserDetailsError(error) {
  return {
    type: GET_USER_DETAILS_ERROR,
    error,
  };
}

export function signUp(email, password, firstname, lastname, middlename, role) {
  return {
    type: SIGN_UP_REQUEST,
    email,
    password,
    firstname,
    lastname,
    middlename,
    role,
  };
}
