import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the auth state domain
 */

const selectAuthDomain = state => state.auth || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Auth
 */

const makeSelectAuth = () =>
  createSelector(
    selectAuthDomain,
    substate => substate,
  );

const makeSelectToken = () =>
  createSelector(
    selectAuthDomain,
    substate => substate.token,
  );

const makeSelectError = () =>
  createSelector(
    selectAuthDomain,
    substate => substate.error,
  );

const makeSelectLoading = () =>
  createSelector(
    selectAuthDomain,
    substate => substate.loading,
  );

export { makeSelectAuth, makeSelectError, makeSelectToken, makeSelectLoading };
export { selectAuthDomain };
