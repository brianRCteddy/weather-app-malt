/**
 *
 * Asynchronously loads the component for DailyForecast
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
