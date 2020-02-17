/**
 *
 * Loading
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Loading() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Loading.propTypes = {};

export default memo(Loading);
