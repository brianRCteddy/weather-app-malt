/**
 *
 * Asynchronously loads the component for WeatherForecast
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
