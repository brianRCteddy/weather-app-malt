/*
 * DailyForecast Messages
 *
 * This contains all the text for the DailyForecast component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.DailyForecast';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the DailyForecast component!',
  },
});
