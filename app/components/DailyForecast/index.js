/**
 *
 * DailyForecast
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import styled from 'styled-components';

import { FormattedDate } from 'react-intl';
import { changeIndex } from '../../containers/WeatherForecast/actions';
import { makeSelectWeatherForecast } from '../../containers/WeatherForecast/selectors';

function DailyForecast(props) {
  // logic for transforming the params
  const newDate = new Date(props.day.dt_txt);
  const getDayName = newDate.toString().split(' ');
  const linkUrl = getDayName[0];

  const celsiusMin = props.day.main.temp_min - 273.15;
  const celsiusMax = props.day.main.temp_max - 273.15;

  return (
    <div>
      <Link
        to={`/${linkUrl}`}
        style={{ color: 'black' }}
        onClick={() => props.changeIndex(props.index)}
      >
        <FormattedDate
          value={new Date(props.day.dt * 1000)}
          weekday="short"
          hour="numeric"
          timeZoneName="short"
        />
      </Link>
      <div>
        <span>Highest temp: {celsiusMax.toFixed(2)}&deg; </span>
        <span>Lowest temp: {celsiusMin.toFixed(2)}&deg;</span>
      </div>
      <div>
        <img
          src={`https://openweathermap.org/img/w/${
            props.day.weather[0].icon
          }.png`}
          alt={props.day.weather[0].description}
        />
        {props.day.weather[0].main}
      </div>
    </div>
  );
}

DailyForecast.propTypes = {
  day: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  changeIndex: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  weatherForecastPage: makeSelectWeatherForecast(),
});

const mapDispatchToProps = dispatch => ({
  changeIndex: index => dispatch(changeIndex(index)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DailyForecast);
