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
} from './constants';

export const initialState = {
  token: null,
  error: null,
  loading: false,
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
        draft.error = null;
        draft.loading = false;
        break;
      case AUTH_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      case AUTH_LOGOUT:
        draft.token = null;
    }
  });

export default authReducer;
