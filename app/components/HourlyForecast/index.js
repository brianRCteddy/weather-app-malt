/**
 *
 * HourlyForecast
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// import styled from 'styled-components';

import { FormattedDate } from 'react-intl';
import {
  makeSelectWeatherForecast,
  makeSelectCity,
} from '../../containers/WeatherForecast/selectors';

function HourlyForecast(props) {
  const dayData = props.weatherForecastPage.hourlyData[
    props.weatherForecastPage.index
  ].map(data => {
    const celsiusMin = data.main.temp_min - 273.15;
    const celsiusMax = data.main.temp_max - 273.15;
    return (
      <div key={data.dt}>
        <FormattedDate
          value={new Date(data.dt_txt)}
          weekday="short"
          hour="numeric"
          timeZoneName="short"
        />
        <span>Highest temp: {celsiusMax.toFixed(2)}&deg; </span>
        <span>Lowest temp: {celsiusMin.toFixed(2)}&deg;</span>
        <img
          src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          alt={data.weather[0].description}
        />
        {data.weather[0].main}
      </div>
    );
  });
  return (
    <div>
      <h1>{props.city}</h1>
      {dayData}
    </div>
  );
}

HourlyForecast.propTypes = {
  weatherForecastPage: PropTypes.object.isRequired,
  city: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  weatherForecastPage: makeSelectWeatherForecast(),
  city: makeSelectCity(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(HourlyForecast);
