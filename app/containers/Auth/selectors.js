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

const makeSelectUserId = () =>
  createSelector(
    selectAuthDomain,
    substate => substate.userId,
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

const makeSelectSignUpError = () =>
  createSelector(
    selectAuthDomain,
    substate => substate.signUpError,
  );

const makeSelectSignUpLoading = () =>
  createSelector(
    selectAuthDomain,
    substate => substate.signUpLoading,
  );

const makeSelectRole = () =>
  createSelector(
    selectAuthDomain,
    substate => substate.role,
  );

const makeSelectMessage = () =>
  createSelector(
    selectAuthDomain,
    substate => substate.message,
  );

const makeSelectFirstName = () =>
  createSelector(
    selectAuthDomain,
    substate => substate.firstName,
  );

const makeSelectLastName = () =>
  createSelector(
    selectAuthDomain,
    substate => substate.lastName,
  );

export {
  makeSelectAuth,
  makeSelectError,
  makeSelectToken,
  makeSelectLoading,
  makeSelectUserId,
  makeSelectSignUpError,
  makeSelectRole,
  makeSelectMessage,
  makeSelectSignUpLoading,
  makeSelectFirstName,
  makeSelectLastName,
};
export { selectAuthDomain };
