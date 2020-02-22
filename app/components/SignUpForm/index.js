/**
 *
 * SignUpForm
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function SignUpForm() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

SignUpForm.propTypes = {};

export default memo(SignUpForm);
