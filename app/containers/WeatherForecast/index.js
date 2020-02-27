/**
 *
 * WeatherForecast
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectCity, makeSelectWeatherForecast } from './selectors';
import { filterDaily } from './actions';
import reducer from './reducer';
import saga from './saga';

import Search from '../../components/Search';
import Loading from '../../components/Loading';
import DailyForecast from '../../components/DailyForecast';
import {
  makeSelectToken,
  makeSelectUserId,
  makeSelectFirstName,
  makeSelectLastName,
} from '../Auth/selectors';
import { logoutSucceed, getUserDetailsRequest } from '../Auth/actions';

export function WeatherForecast(props) {
  useInjectReducer({ key: 'weatherForecast', reducer });
  useInjectSaga({ key: 'weatherForecast', saga });

  useEffect(() => {
    props.getUserDetails();
  }, []);

  if (!props.token) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Helmet>
        <title>WeatherForecast</title>
        <meta name="description" content="Description of WeatherForecast" />
      </Helmet>
      <h1>5 Day Weather Forecast</h1>
      <h2>
        Good Day {props.firstName} {props.lastName}!
      </h2>
      {props.weatherForecast.isLoading ? (
        <Loading />
      ) : (
        <div>
          <Search />
          <br />
          <br />
          {props.weatherForecast.dailyData.map((day, index) => (
            <DailyForecast key={day.dt} index={index} day={day} />
          ))}
          <button onClick={props.logout} type="button">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

WeatherForecast.propTypes = {
  weatherForecast: PropTypes.object.isRequired,
  token: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  logout: PropTypes.func,
  getUserDetails: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  weatherForecast: makeSelectWeatherForecast(),
  city: makeSelectCity(),
  token: makeSelectToken(),
  firstName: makeSelectFirstName(),
  lastName: makeSelectLastName(),
  userId: makeSelectUserId(),
});

const mapDispatchToProps = dispatch => ({
  filterDaily: data => dispatch(filterDaily(data)),
  logout: () => dispatch(logoutSucceed()),
  getUserDetails: () => dispatch(getUserDetailsRequest()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(WeatherForecast);
