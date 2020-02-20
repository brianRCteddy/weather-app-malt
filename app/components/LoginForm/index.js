/**
 *
 * LoginForm
 *
 */

import React, { memo, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// import styled from 'styled-components';

import {
  makeSelectToken,
  makeSelectError,
} from '../../containers/Auth/selectors';
import { authUser } from '../../containers/Auth/actions';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (props.token) {
    return <Redirect to="/" />;
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.login(email, password);
  };

  return (
    <div>
      <h1>Log In</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  token: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken(),
  error: makeSelectError(),
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(authUser(email, password)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginForm);
