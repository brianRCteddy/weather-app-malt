/**
 *
 * DailyForecast
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function DailyForecast() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

DailyForecast.propTypes = {};

export default memo(DailyForecast);
