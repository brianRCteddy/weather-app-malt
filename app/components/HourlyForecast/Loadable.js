/**
 *
 * Asynchronously loads the component for HourlyForecast
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
