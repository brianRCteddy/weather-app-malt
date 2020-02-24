/**
 *
 * SignUpForm
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import styled from 'styled-components';

import {
  makeSelectSignUpError,
  makeSelectRole,
  makeSelectMessage,
} from '../../containers/Auth/selectors';
import { signUp, signUpError } from '../../containers/Auth/actions';

function SignUpForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const { role } = props;

  const handleSubmitSignUp = e => {
    e.preventDefault();
    if (password !== cPassword) {
      signUpError("Passwords don't match");
    } else {
      props.signUp(email, password, firstName, middleName, lastName, role);
    }
  };

  return (
    <div>
      <h1>Sign Up Form</h1>
      <form action="submit" onSubmit={handleSubmitSignUp}>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={cPassword}
          onChange={e => setCPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="MiddleName"
          value={middleName}
          onChange={e => setMiddleName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        {props.errorSignUp ? (
          <h2 style={{ color: 'red' }}>{props.errorSignUp}</h2>
        ) : null}
      </form>
    </div>
  );
}

SignUpForm.propTypes = {
  signUp: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  errorSignUp: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  role: makeSelectRole(),
  errorSignUp: makeSelectSignUpError(),
});

const mapDispatchToProps = dispatch => ({
  signUp: (email, password, firstName, middleName, lastName, role) =>
    dispatch(signUp(email, password, firstName, middleName, lastName, role)),
  signUpError: error => dispatch(signUpError(error)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SignUpForm);
