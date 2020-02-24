/**
 *
 * WeatherForecast
 *
 */

import React, { memo } from 'react';
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
import { makeSelectToken, makeSelectUserId } from '../Auth/selectors';
import { logoutSucceed } from '../Auth/actions';

export function WeatherForecast(props) {
  useInjectReducer({ key: 'weatherForecast', reducer });
  useInjectSaga({ key: 'weatherForecast', saga });
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
      <h2>Good Day User {props.userId}!</h2>
      {props.weatherForecastPage.isLoading ? (
        <Loading />
      ) : (
        <div>
          <Search />
          <br />
          <br />
          {props.weatherForecastPage.dailyData.map((day, index) => (
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
  weatherForecastPage: PropTypes.object.isRequired,
  token: PropTypes.string,
  userId: PropTypes.string,
  logout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  weatherForecastPage: makeSelectWeatherForecast(),
  city: makeSelectCity(),
  token: makeSelectToken(),
  userId: makeSelectUserId(),
});

const mapDispatchToProps = dispatch => ({
  filterDaily: data => dispatch(filterDaily(data)),
  logout: () => dispatch(logoutSucceed()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(WeatherForecast);
