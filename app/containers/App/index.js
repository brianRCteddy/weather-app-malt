/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import WeatherForecast from '../WeatherForecast';
import HourlyForecast from '../../components/HourlyForecast';
import Auth from '../Auth';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Auth} />
        <Route exact path="/:day" component={HourlyForecast} />
        <Route exact path="/" component={WeatherForecast} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
