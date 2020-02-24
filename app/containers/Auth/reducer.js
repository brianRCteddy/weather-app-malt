/*
 *
 * Auth reducer
 *
 */
import produce from 'immer';
import {
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_REQUEST,
  AUTH_LOGOUT,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_ERROR,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
} from './constants';

export const initialState = {
  userId: null,
  firstName: '',
  middleName: '',
  lastName: '',
  role: 'user',
  message: null,
  token: null,
  error: null,
  loading: false,
  userLoading: false,
  userError: null,
  signUpLoading: false,
  signUpError: null,
};

/* eslint-disable default-case, no-param-reassign */
const authReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case AUTH_REQUEST:
        draft.error = null;
        draft.loading = true;
        break;
      case AUTH_SUCCESS:
        draft.token = action.token;
        draft.firstName = action.firstName;
        draft.lastName = action.lastName;
        draft.error = null;
        draft.loading = false;
        break;
      case AUTH_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      case GET_USER_DETAILS_REQUEST:
        draft.userLoading = true;
        draft.userError = null;
        break;
      case GET_USER_DETAILS_SUCCESS:
        draft.firstName = action.firstName;
        draft.middleName = action.middleName;
        draft.lastName = action.lastName;
        draft.role = action.role;
        draft.userLoading = false;
        draft.userError = null;
        break;
      case GET_USER_DETAILS_ERROR:
        draft.userLoading = false;
        draft.userError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpError = null;
        draft.message = action.message;
        break;
      case SIGN_UP_ERROR:
        draft.signUpError = action.error;
        draft.signUpLoading = false;
        break;
      case AUTH_LOGOUT:
        draft.token = null;
    }
  });

export default authReducer;
