/**
 *
 * Asynchronously loads the component for BeerMug
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
