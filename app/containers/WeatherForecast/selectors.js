import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the weatherForecast state domain
 */

const selectWeatherForecastDomain = state =>
  state.weatherForecast || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by WeatherForecast
 */

const makeSelectWeatherForecast = () =>
  createSelector(
    selectWeatherForecastDomain,
    substate => substate,
  );

const makeSelectCity = () =>
  createSelector(
    selectWeatherForecastDomain,
    substate => substate.city,
  );

export { makeSelectWeatherForecast, makeSelectCity };
export { selectWeatherForecastDomain };
