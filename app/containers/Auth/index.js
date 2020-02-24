/**
 *
 * Auth
 *
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectError,
  makeSelectToken,
  makeSelectLoading,
  makeSelectAuth,
  makeSelectUserId,
  makeSelectRole,
  makeSelectSignUpError,
  makeSelectMessage,
  makeSelectSignUpLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import LoginForm from '../../components/LoginForm';
import Loading from '../../components/Loading';
import SignUpForm from '../../components/SignUpForm';

export function Auth(props) {
  useInjectReducer({ key: 'auth', reducer });
  useInjectSaga({ key: 'auth', saga });

  return (
    <div>
      <Helmet>
        <title>Weather Forecast</title>
        <meta name="description" content="Description of Auth" />
      </Helmet>
      <LoginForm />
      {props.loading ? (
        <h2 style={{ color: 'blue' }}>
          <Loading />
        </h2>
      ) : (
        <strong>{props.error}</strong>
      )}

      <br />
      <br />

      <SignUpForm />
      {props.signUpLoading ? (
        <h2 style={{ color: 'blue' }}>
          <Loading />
        </h2>
      ) : (
        <h2 style={{ color: 'green' }}>{props.message}</h2>
      )}
      {props.errorSignUp ? (
        <h2 style={{ color: 'red' }}>{props.errorSignUp}</h2>
      ) : null}
    </div>
  );
}

Auth.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  signUpLoading: PropTypes.bool,
  message: PropTypes.string,
  errorSignUp: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  authData: makeSelectAuth(),
  userId: makeSelectUserId(),
  loading: makeSelectLoading(),
  token: makeSelectToken(),
  error: makeSelectError(),
  errorSignUp: makeSelectSignUpError(),
  message: makeSelectMessage(),
  signUpLoading: makeSelectSignUpLoading(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(Auth);
