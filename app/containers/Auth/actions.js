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

export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token,
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
