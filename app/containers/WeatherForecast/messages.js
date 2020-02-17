/*
 * WeatherForecast Messages
 *
 * This contains all the text for the WeatherForecast container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.WeatherForecast';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the WeatherForecast container!',
  },
});
