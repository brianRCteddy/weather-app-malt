/*
 * HourlyForecast Messages
 *
 * This contains all the text for the HourlyForecast component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.HourlyForecast';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HourlyForecast component!',
  },
});
