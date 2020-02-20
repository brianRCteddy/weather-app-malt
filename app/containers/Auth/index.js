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
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import LoginForm from '../../components/LoginForm';
import Loading from '../../components/Loading';

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
      {props.loading ? <Loading /> : <strong>{props.error}</strong>}
    </div>
  );
}

Auth.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  token: makeSelectToken(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(Auth);
